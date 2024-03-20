const fancyTimeFormat = (duration, par) => {
   // Hours, minutes and seconds
   var hrs = ~~(duration / 3600)
   var mins = ~~((duration % 3600) / 60)
   var secs = ~~duration % 60

   var ret = ""

   if (par) {
      if (hrs > 0) {
         ret += "" + hrs + " giờ"
      }

      ret += " " + mins + " phút" + (secs < 10 ? "0" : "")

      return ret
   }

   if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
   }

   ret += "" + mins + ":" + (secs < 10 ? "0" : "")
   ret += "" + secs

   return ret
}

export default fancyTimeFormat
