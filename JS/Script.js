var galleryImages =
    [
        "../Assets/Gallery/Acoustic.png",
        "../Assets/Gallery/Band.png",
        "../Assets/Gallery/Gig.png",
        "../Assets/Gallery/Gig1.png",
        "../Assets/Gallery/TheBand.png"
    ];
var galleryIndex;
galleryIndex = 0;
var galleryImage;
window.onload = function ()
    {
        galleryImage = document.getElementById("gallery-Image");
        onGalleryChanged();
    };
function galleryChange(offset)
    {
        var offsetIndex = (galleryIndex + offset);  
        if (offsetIndex < 0) 
            galleryIndex = galleryImages.length + offset;    
        else
            galleryIndex = (galleryIndex + offset) % galleryImages.length;
    
        onGalleryChanged();
    }
function onGalleryChanged()
    {
        galleryImage.src = galleryImages[galleryIndex];
    }
