function captureEmotions(emotion){
    if (emotion === 'happy'){
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "height:20px;border-radius: 50%;";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "height:20px;border-radius: 50%;";
      document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText = "border-width:0 1px 6px 1px;left:15px;top:-25px;border-radius: 50%;";
    } else if (emotion === 'sad'){
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "height:20px;border-radius: 50%;";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "height:20px;border-radius: 50%;";
       document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText = "height:60%;width:60%;border-width:0 1px 6px 1px;left:30px;top:90px;transform: rotate(180deg);";
    } else if (emotion === 'annoyed' ){
     document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "height:5px;border-radius: 0;";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "height:5px;border-radius: 0;";
        document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText = "width: 50%;top: -50px;left: 35px;border-radius: 0;";
      } else if(emotion === 'worried'){
        document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "height:20px;border-radius: 50%;";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "height:20px;border-radius: 50%;";
        document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText = "width: 50%;top: -50px;left: 18px;border-radius: 0;transform: rotate(-15deg);";
      } else if (emotion === 'surprised')
        {
           document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "height:20px;border-radius: 50%;";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "height:20px;border-radius: 50%;";
        document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText = " background-color:#F9B208;width: 30%;height:30%;top: 84px;left: 52px;border: 3px solid #000; border-radius: 50%;transform: rotate(0deg);";
        } else if(emotion === 'laugh'){
          document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-left").style.cssText = "background-color:transparent;width:30px;border-right-color:transparent;border-top-color:transparent;height:30px;border-radius: 0;transform:rotate(45deg)";
      document.querySelector("body > div > div.body > div.emoji-body > div.eyes > div.eyes-right").style.cssText = "background-color:transparent;width:30px;left:20px;border-left-color:transparent;border-top-color:transparent;height:30px;border-radius: 0;transform:rotate(-45deg)";
          document.querySelector("body > div > div.body > div.emoji-body > div.mouth").style.cssText ="left:16px;top:-16px;border-width:0 1px 6px 1px;border-radius: 50%;";
        }
  }