#Bison, Inc. BoreLogger

##Horizontal Directional Drilling
Horizontal directional drilling (a.k.a. directional boring) is defined by [Wikipedia](http://en.wikipedia.org/wiki/Directional_boring) :

>Directional boring, commonly called horizontal directional drilling or HDD, is a steerable trenchless method of installing underground
pipes, conduits and cables in a shallow arc along a prescribed bore path by using a surface-launched drilling rig, with minimal impact
on the surrounding area. Directional boring is used when trenching or excavating is not practical. It is suitable for a variety of soil
conditions and jobs including road, landscape and river crossings

This app was built for the purpose of logging various data pertaining to the task of completing a bore as described above.

The type of data collected includes typical information included on company invoices:

	- the customer
	- the location of the bore
	- the conduit (product) installed
	- the date (of start or completion)
	- and a cut-sheet of locates representing each rod drilled in the ground (and thus, the depth of the product installed) and any relevant data such as stations and/or crossings

This data can be recorded in the app either during or after the completion of the work and is collected into a document referred to as a 
"log." This app views these logs as belonging to one of two possible categories:
	
	- "bore logs"
	- and "bore journals"
	
These are two types of logs are defined in terms of the project status to which they are applicable:

	- A bore journal is essentially the locator's field notes, recorded as the job completes and is presently ongoing.
	- A bore log is a finalize record of such field notes, recorded on the completion of the job, and can be created from a bore journal or copied from other field notes.

Bore logs and bore journals are recorded as text documents and xml files on the device (also as IndexedDB entries in the Hybrid app).
This facilitates access to the data, as any plain text editor can be used to manipulate the files. The text files are used (again, IndexedDB 
entries when using the hybrid app) to carry out tasks of converting bore journals to bore logs, and bore logs to finalized PDF invoices.
There are numerous features found along the way of the app's workflow to facilitate an easy transition from paper to digital files and to
encourage workers in the field to experience and enjoy the conveniences offered by employing mobile technologies on the job.

#Guide to directories

##android/
The Java app for Android devices running **4.2.2+**
Contains the hybrid app (using CordovaWebViews) which can be accessed via menu item options on pressing the hard menu button
of the Android device.

##ionic/
The Angular.js (1.x) + Ionic framework hybrid app
So far, this has only been built for the Android platform, but it can also be build for iOS using the Ionic CLI tool on any Apple PC.

##nodejs/
Back-end (TBD)