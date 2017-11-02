+++
title = "Ansible connection failure with Ubuntu Server 16.04"
description = "Ansible fails to connect to Ubuntu Server 16.04 - it's because of Python!"
tags = [
  "Ansible Python not working Ubuntu 16.04","Ansible Python3 not working Ubuntu 16.04","Ansible defaults to Python 2.7 on Ubuntu 16.04","Ubuntu Server 16.04 with Ansible not working","Ansible Python not found Ubuntu Server 16.04" 
]
url = ""
date = "2017-11-02T09:12:57+01:00"
slug = "ansible-python-connection-failure-ubuntu-server-1604"
draft = "false"
categories = [
  "Tips & Tricks","Guides"
]
pageimage = ""

+++
Having trouble connecting to Ubuntu Server 16.04 from your Ansible control machine? If you ping your Ubuntu Server do you get a similar error:

```text
ubuntu_host | FAILED! => {
    "changed": false, 
    "failed": true, 
    "module_stderr": "Shared connection to 138.68.174.106 closed.\r\n", 
    "module_stdout": "/bin/sh: 1: /usr/bin/python: not found\r\n", 
    "msg": "MODULE FAILURE", 
    "rc": 0
}
```

If you do, there's a simple solution (and you should have [read the docs!](http://docs.ansible.com/ansible/latest/intro_installation.html) :-D )

## Ansible Python not found on Ubuntu Server 16.04

It's all about Python. By default, Ansible uses Python 2.7 (yes, even the current version of Ansible 2.4 does) despite moves to migrate to Python3. 

As such, your _target_ system needs to have Python 2.7 installed in order for Ansible to control it. Unfortunately, Ubuntu Server 16.04 doesn't come with Python 2.7 installed by default but there is a quick fix...

### Install Python 2.7 on Ubuntu Server 16.04

The fix is as simple as installing a couple things - `python-minimal` and `python-simplejson`. You can do this manually the same way you'd install a package normally:

```text
sudo apt install python-minimal python-simplejson
```

#### A note on why you need to install `python-minimal` on ubuntu Server 16.04

When you install `python-minimal` the following packages are installed:

```text
libpython-stdlib 
libpython2.7-minimal 
libpython2.7-stdlib 
python
python-minimal 
python2.7 
python2.7-minimal
```

You need these extra packages in order for Ansible to work correctly, simply installing `Python2.7` is **not** enough.

### Make Ansible install Python 2.7

If you want to get Python 2.7 installed as part of a playbook when provisioning a server, it can seem a bit like chicken and the egg - you need on to do the other. But you can make use of the 'RAW' module to have Ansible install the needed version for you.

```text
ansible ubuntu_host --sudo -m raw -a "apt install -y python-minimal python-simplejson" 
``` 

Obviously this is a manual operation, unless you add this to your Playbook, but we can do better!

### Ansible automatically installing Python 2.7 on Ubuntu Server 16.04

Thanks to [this page](https://gist.github.com/gwillem/4ba393dceb55e5ae276a87300f6b8e6f) you can also use a more advanced setup that will do this as part of setting up the server by simply adding this to the top of your `Playbook.yml` file:

```text
gather_facts: False
  pre_tasks:
    - name: Install python for Ansible
      raw: test -e /usr/bin/python || (apt -y update && apt install -y python-minimal)
      register: output
      changed_when: output.stdout != ""
  - setup: # aka gather_facts
  ```

The above code does the following:

1. Turns off fact checking (as this requires Python installed)
2. Sets up a pre_task to run before all others in the Playbook
3. Checks to see if `Python2.7` is installed and, *only if not present*, installs it
4. Registers an output only if installation is needed and prints this to the terminal output.

## Use Python 3 with Ansible 2.2 and above

If you're using Ansible >2.2.0, you can set the ansible_python_interpreter configuration option to `/usr/bin/python3`:

```text
ansible ubuntu_host -m ping -e 'ansible_python_interpreter=/usr/bin/python3'
```

This tells Ansible to use Python 3 when connecting, and as Python3 is already installed on Ubuntu Server 16.04 you won't need to install anything. 

Alternatively you can put this in your inventory (hosts) file:

```text
[ubuntu_hosts]
<xxx.xxx.xxx.xxx>

[ubuntu_hosts:vars]
ansible_python_interpreter=/usr/bin/python3
```

If you want to make every single host use `Python3`, just set a variable for `[all]`.

```text
[all:vars]
ansible_python_interpreter=/usr/bin/python3
```

More info on this second method can be [found in the Ansible Python3 docs](http://docs.ansible.com/ansible/latest/python_3_support.html).