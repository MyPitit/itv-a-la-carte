# itv à la carte

This app is developed using pure vanilla JavaScript, by [Mireia Sangalo](http://mireiasangalo.com/) ([@MyPitit](https://github.com/MyPitit)).

Old project presented on 24 of May 2016, click [here](https://github.com/MyPitit/itv-apis) to see the full project.

## Architecture

1 - **`Home Page`**, setting up an `HTTP request headers`.

All the channels will be displayed on the `Home Page`: itv, itv2, itvBe, itv3, itv4 and CITV.

API:

```
Channels
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/channels?broadcaster=ITV

```

The channels will be displayed as a list.

### Home Page screenshot
![cursor_and_itv_a_la_carte](https://cloud.githubusercontent.com/assets/2573931/17107006/639e2690-5285-11e6-910b-b62b359ef938.png)

2 - **`Productions Page`**: When the user click on one channel in particular, another `HTTP request headers` will be send in order to get the all the corresponding programmes from that channel in particular.

API for each channel:

```
itv
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv&broadcaster=itv

itv2
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv2&broadcaster=itv

itvBe
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itvbe&broadcaster=itv

itv3
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv3&broadcaster=itv

itv4
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=itv4&broadcaster=itv

CITV
http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=latestPerProgramme&channelId=citv&broadcaster=itv

```

### Productions Page screenshot

![cursor_and_productions](https://cloud.githubusercontent.com/assets/2573931/17107007/63a32cb2-5285-11e6-9a04-cb13cb3172bd.png)

3 - **`Programme Page`**: The user will be able to click any programme and get more information about that programme in particular.

To being able to access to the programmes, an `HTTP request headers` will be send in order to get all the corresponding data.

Data displayed on `Programme Page`:

```
"programmeTitle"
"categories"
"duration"
"broadcastDateTime"
"catalogueHierarchyDescription"
"synopsis"
"image"

```
### Programme Page screenshot
![cursor_and_programme](https://cloud.githubusercontent.com/assets/2573931/17143599/bced4700-534b-11e6-8e44-8e702a1fdce2.png)

## Flow diagram
![flow](https://cloud.githubusercontent.com/assets/2573931/16921951/981d0172-4d0b-11e6-9c93-6908b64da297.png)

## Style guides
![img1](https://cloud.githubusercontent.com/assets/2573931/16921933/8bd2ba9c-4d0b-11e6-8215-13f22411ea6d.png)
![img2](https://cloud.githubusercontent.com/assets/2573931/16921950/967e0fc8-4d0b-11e6-9345-e663a23daffa.png)
