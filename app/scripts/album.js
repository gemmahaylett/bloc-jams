 // Example Album
 var albumPicasso = {
   name: 'The Colors',
   artist: 'Pablo Picasso',
   label: 'Cubism',
   year: '1881',
   albumArtUrl: '/images/album-placeholder.png',
   songs: [
       { name: 'Blue', length: '4:26' },
       { name: 'Green', length: '3:14' },
       { name: 'Red', length: '5:01' },
       { name: 'Pink', length: '3:21'},
       { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
   name: 'The Telephone',
   artist: 'Guglielmo Marconi',
   label: 'EM',
   year: '1909',
   albumArtUrl: '/images/album-placeholder.png',
   songs: [
       { name: 'Hello, Operator?', length: '1:01' },
       { name: 'Ring, ring, ring', length: '5:01' },
       { name: 'Fits in your pocket', length: '3:21'},
       { name: 'Can you hear me now?', length: '3:14' },
       { name: 'Wrong phone number', length: '2:15'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
   var template =
       '<tr>'
     + '  <td class="col-md-1">' + songNumber + '</td>'
     + '  <td class="col-md-9">' + songName + '</td>'
     + '  <td class="col-md-2">' + songLength + '</td>'
     + '</tr>'
     ;
 
   return $(template);
 };

 var displayAlbumSummary = function(albumId, album){
   // Update the album title
   var albumTitleStr= albumId + ' .album-title';
   var $albumTitle = $(albumTitleStr);
   $albumTitle.text(album.name);
 
   // Update the album artist
   var albumArtistStr= albumId + ' .album-artist';
   var $albumArtist = $(albumArtistStr);
   $albumArtist.text(album.artist);
 
   // Update the meta information
   var albumMetaStr= albumId + ' .album-meta-info';
   var $albumMeta = $(albumMetaStr);
   $albumMeta.text(album.year + " on " + album.label);

    // Update the album image
   var albumImgStr = albumId + '.album-image img';
   var $albumImage = $(albumImgStr);
   $albumImage.attr('src', album.albumArtUrl);

 }

 var changeAlbumView = function(event) {
   // Update the Song List
   console.log(event);
   album = event.data;
   var $songList = $(".album-song-listing");
   $songList.empty();
   var songs = album.songs;
   for (var i = 0; i < songs.length; i++) {
     var songData = songs[i];
     var $newRow = createSongRow(i + 1, songData.name, songData.length);
     $songList.append($newRow);
   }
 };


// This 'if' condition is used to prevent the jQuery modifications
// from happening on non-Album view pages.
//  - Use a regex to validate that the url has "/album" in its path.
if (document.URL.match(/\/album.html/)) {
 // Wait until the HTML is fully processed.
 $(document).ready(function() {
   displayAlbumSummary('#album-1', albumMarconi);
   displayAlbumSummary('#album-2', albumPicasso);
   //changeAlbumView(albumMarconi);

   $('#album-1').click(albumMarconi, changeAlbumView);
   $('#album-2').click(albumPicasso, changeAlbumView);
   });
 }