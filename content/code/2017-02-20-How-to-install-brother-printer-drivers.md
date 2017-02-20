+++
title = "How to install HL-3040CN Brother printer drivers on Linux (Ubuntu)"
description = "A step by step guide showing how to install on Linux the relevant Brother HL-3040CN printer drivers."
tags = [
  "Brother HL-3040CN printer drivers Ubuntu","HL-3040CN printer driver install guide Linux","HL3040CN printer driver install guide Ubuntu","Brother printer driver install guide Ubuntu","Brother printer driver install guide Linux" 
]
url = ""
date = "2017-02-20T18:26:06+01:00"
slug = "install-brother-printer-hl3040cn-drivers-linux-ubuntu"
draft = "false"
categories = [
  "Tips & Tricks","Guides"
]
pageimage = ""

+++
For this guide we're going to be looking at the installation of drivers for the Brother HL-3040CN laser printer and how to set up the connection to get it to print over the network. 

The instructions on the Brother printer driver pages do actually work (just about) but they're not exactly crystal clear. For instance, they don't have all the info on one page and they also tell you to set a connection setting that will potentially break printing if your printers IP address changes.

Let's go through this one step at a time...

## Downloading the Brother HL-3040CN linux drivers

To get the drivers for the HL-3040CN, visit [this page](http://support.brother.com/g/b/downloadlist.aspx?c=us&lang=en&prod=hl3040cn_all&os=128).

On that page you'll see the following...

![Brother printer driver for HL-3040CN](/static/img/2017/02/brother-driver/driver-list-page.png)

### Which exact drivers do you need?

You'll need to install **both** the "LPR printer driver (deb package)" and the "CUPSwrapper printer driver (deb package)". 

Firstly, click on the "LPR printer driver", accept the EULA on the next page...and the driver should automatically start downloading. Just save it to your downloads folder for now. 

Once that's done, repeat the process for the "CUPSwrapper printer driver package". Again, save it to your downloads folder. 

## Installing the Brother HL-3040CN linux drivers

You're going to need to open up a terminal window for this one. Yes, you can install graphically just by clicking on the .deb to use GDebi, but that will hide potential errors and leave you wondering why things aren't working. 

So open up a terminal window and `cd` to your `Downloads/` folder. 

Alternatively, navigate to the `Downloads/` folder in the graphical interface, right click on a blank space in the window and select 'Open in Terminal' to open a terminal window in the correct place.

### Pre-required procedures

Once of the tiny, easily overlooked links on the [driver download pages](http://support.brother.com/g/b/downloadhowto.aspx?c=us&lang=en&prod=hl3040cn_all&os=128&dlid=dlf005905_000&flang=4&type3=559) is to a list of pre-required procedures that you need to do before the driver install will fully work. 

Well, you can do them afterwards having spent 2 hours trying to work out what was wrong like I did, but that way is not so much fun. 

So, check out the [pre-required procedures here](http://support.brother.com/g/s/id/linux/en/before.html?c=us&lang=en&prod=hl3040cn_all&redirect=on#prereq).

The ones we need to worry about for Ubuntu are contained in [section 5](http://support.brother.com/g/s/id/linux/en/before.html?c=us&lang=en&prod=hl3040cn_all&redirect=on#004). We need to install the `ia32-libs` package (which doesn't exist in 16.04 but we'll get to that) and `lib32stdc++` (which just fires out a load of errors, but we'll get to that).

#### ia32-libs installation

If you attempt to install this package with `sudo apt-get install ia32-libs` it'll simply return an error (on Ubuntu 16.04 at least) stating:

```
E: Package 'ia32-libs' has no installation candidate
```

That's because this particular package has been replaced with two others: 

- `lib32ncurses5`
- `lib32z1`

We can successfully install these two packages with the following command:

```
sudo apt-get install lib32ncurses5 lib32z1
```

#### lib32stdc++ installation

You can install this if you like with the following command:

```
sudo apt-get install lib32stdc++
```

It'll be installed already (or an equivalent package will be) in Ubuntu 16.04 and the installation attempt will throw out conflicts with pre-existing packages and the install won't go through. Don't worry about it, there's more detail we could go into but essentially you've got the equivalent packages needed already installed, so move on. 

You ***will*** potentially have to install this package or a version for your particular distro version/age if there isn't one already present, so attempt the install any and follow up any errors indicated.  

### Installing the actual drivers...finally!

So, you're in your terminal and in your `Downloads/` folder (or wherever you saved the driver .deb files). Now we just issue the install commands.

#### Installing the LPR printer driver (first)

For the LPR printer driver, which you should install first, use:

```
sudo dpkg -i --force-all hl3040cnlpr-*.deb
```

Now, with this command it's possible you'll get the following error:

```
mkdir: cannot create directory `/var/spool/lpd/hl3040cn': No such file or directory
chown: cannot access `/var/spool/lpd/hl3040cn': No such file or directory
chgrp: cannot access `/var/spool/lpd/hl3040cn': No such file or directory
chmod: cannot access `/var/spool/lpd/hl3040cn': No such file or directory
```

It's a simple fix, just create the directory the installation script can't and repeat the installation command:

```
sudo mkdir -p /var/spool/lpd && sudo dpkg -i --force-all hl3040cnlpr-*.deb
```

You can check the install worked with the command:

```
dpkg -l | grep Brother
```

Note the capital 'B' in 'Brother'. 

The output should list the following:

```
ii  hl3040cncupswrapper:i386                    1.1.2-1     i386         
    Brother CUPS Inkjet Printer Definitions
```

If it's not there, something has gone wrong and you should recheck the steps above have been followed perfectly as they will get the driver installed correctly. 

#### Installing the CUPSwrapper printer driver (second)

For the CUPSwrapper printer driver, which you should install second, use:

```
sudo dpkg -i --force-all hl3040cncupswrapper-*.deb
```

Again, you can chek it installed by using the command below once more. You should now see the two drivers installed:

```
dpkg -l | grep Brother
```

I didn't get any errors with this, so if you do you'll either need to [get in touch](/contact/) or do like a real system administrator and use Google to find the relevant Stack Overflow post that solves the issue :-)

## Setting up network printing

I'm going to lay out a different approach to what is contained in the official Brother driver install guides. They'll tell you a bunch of things to do, but they're unlikely to work and don't use the built in tools in Ubuntu...which will work. 

So to recap, we've installed the bit's needed in the pre-required list and we've successfully installed both drivers. 

Great!

Now open up the Printer section of System Settings. In Ubuntu this is as easy as hitting the super key and typing "printer".

**NOTE** - the super key is probably the Windows key on your keyboard unless you're as dedicated as me and replaced it with a linux one. No really, I have.

Once you've done that you should see the window shown below

![Ubuntu printer settings window](/static/img/2017/02/brother-driver/printers-settings-page.png)

You may or may not already see the printer in the window. Don't worry about it, just right click on the printer if you do see it and select 'delete'. We're going to set it up again with the correct settings and this will mean we make the correct printer in the correct way and set the correct default once all is done. 

### Steps to setup the HL3040CN for network printing

Lets go through slowly with pictures:

1) Click on the 'Add +' button which will open up the window below

![new printer setup window - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-1.png)

2) Click on "Network Printer" to expand the drop down. Then wait a couple seconds and two Brother printers should appear just below the "Network Printer" and above the "Find Network Printer"

![Find printer setup window - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-2.png)

3) If you expand the window slightly you should be able to reveal the full names of the Brother printers. On one of the, the lower in my case, you'll see an IP address listed after the name. That's the one wewant to click on so click on the one with the IP address.

![Find printer window with IP address shown - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-3.png)

4) Once clicked on, the right hand window will show a description and connection. Both should list `AppSocket/JetDirect network printer via DNS-SD` as shown below. 

Click on forward to go to the next step 

![New printer setup via AppSocket/JetDirect - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-4.png)

5) A little pop up box will appear saying "Searching for Drivers". Ignore it and wait for it to finish and display the window below. You **DO NOT** want to let the system select the driver for you, we'll be selecting the PPD file manually. 

![Selecting driver for new printer setup - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-5.png)

6) Click on the "Provide PPD file" radio button and the window will change to that shown below

![Select PPD file window for new printer setup - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-6.png)

7) Click on the little drop down menu thing currently labelled "(None)" and it'll open an explorer window from which you are to select the PPD file. 

8) Selecting the PPD file. It's in the following location:

```
/usr/share/cups/model/Brother/brother_hl3040cn_printer_en.ppd
```

#### Where the heck is the `usr/` directory?

You will be able to find the `usr/` directory under the 'Other Locations' area on the sidebar of the explorer window.

Clicking that "Other Locations" bookmark will bring up a disk listed (most likely) as "Computer". Just click on that disk to get a list of directories. The `usr/` can be found alphabetically, so near the bottom. 

From there, simply navigate through `usr > share > cups > model > Brother` and select the .ppd file named `brother_hl3040cn_printer_en.ppd`.

#### Moving on...

Once the .ppd file is selected and entered, the window will look like below. Just Click on the "Forward" button to continue

![PPD file selected ready - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-8.png)

9) The next window will look like the one below, just click "Apply" to complete the setup, you don't need to change anything.

![Describe printer window - Ubuntu](/static/img/2017/02/brother-driver/new-printer-window-9.png)

10) Print a test page - the setup will ask you if you want to print one, go ahead and do so to test things are working.

#### Finishing up and making sure the default printer is set

So the way I've guided you through setting this up should mean that if your printers IP address changes, the printer will still be found and print jobs will still go through. Many guides I've seen involve setting a specific address and that means you should really be setting a static address for the printer which is a whole other nuiscance. 

Why bother if you don't need to, eh?

Anyway, after the printer is successfully setup you may need to specify it as default. Simply right click on the printer icon in the Printer Settings window and select "Set As Default".

That's it, you're done. 

## Something went wrong

Yeah, a hundred billion things could have happened. You might be here hoping to glean a little inspiration for installing on a totallty different distro, you might have a different version to me, the driver might have been updated and broken something if you're here months after the post was written. 

I can't offer you any specific advice other than to Google your exact error messages.

You can [drop me a note](/contact/) if you know something I've written is actively giving a problem or is now wrong thanks to a recent change. I'll then update this page. 






