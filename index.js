$(
    () => {
        let musicPlay = false;
        let music = new Audio("img/Thingyan_Music(Cropped).mp3");
        music.loop= true;
        // $("body").click(() => {
            
        //     music.play();
        //     musicPlay = true;
        // })
        $("#music-icon").click(()=>{
           
        
        console.log("hi");
            if(!musicPlay) {
                music.play();
                musicPlay = true;
                $("#music-icon").attr("src" , "icons/audio-svgrepo-com.svg");
            } 
            else {
                music.pause();
                musicPlay = false;
                $("#music-icon").attr("src" , "icons/mute-svgrepo-com.svg");
            }
        })
        let prayers = [
            "နှစ်ဟောင်းရှိ ပူပင်သောကများ ကင်းစင်လွင့်ပျောက်ကာ အေးချမ်းသာယာတဲ့ နှစ်သစ်ကို ပိုင်ဆိုင်နိုင်ကြပါစေ",
            "မင်္ဂလာရှိသော နှစ်သစ်အခါသမယ ဖြစ်ပါစေ",
            "သင်္ကြန်ရေ လောကကြီးအေးချမ်းကြပါစေ<br/>ဘဲ 2 ယောက်လောက် အေးဆေးရပါစေ",
            "နှစ်သစ်မှာ စီးပွားလာဘ်လာဘများတိုးတက်ကြီးပွားကြပါစေ",
            "နှစ်သစ်မှာ ကိုယ်​၏ကျန်းမာခြင်း စိတ်​၏ချမ်းသာခြင်း အပေါင်းနှင့်ပြည့်စုံနိုင်ကြပါစေ",
            "ကျန်းမာပျော်ရွှင်ချမ်းသာခြင်းများဖြင့် ပြည့်နှက်နေသော ၂၀၂၃ သင်္ကြန်နှစ်ကူး ရုံးပိတ်ရက်များအား ပိုင်ဆိုင်နိုင်ပါစေ",
            "နှစ်ဟောင်းတွင် ကြုံတွေ့ခဲ့ရသော အခက်အခဲ ၊ အကြပ်အတည်းများအားလုံးမှ လွတ်ကင်းပြီး ကိုယ်၊စိတ်၊နှလုံး (၃)ပါးလုံး ကျန်းမာချမ်းသာလို့ချမ်းမြေ့ကြပါစေ",
            "နှစ်သစ်မှာ စိတ်သစ် နဲ့ ရည်းစား အသစ်​လေး ရပါ​စေ",
            "သင်္ကြန်မိုး နဲ့ အတူ ​ရောဂါပိုး​တွေ ကင်းပြီး ​ပျော်စရာ ကျန်းမာ​သော နှစ်သစ်ဖြစ်ပါ​စေ",
            "နှစ်သစ်ကူး သင်္ကြန်အခါသမယမှသည် ကျန်းမာချမ်းသာ ဘေးကင်းကွာ၍ ကောင်းသောလိုအင်ဆန္ဒများ ပြည့်ဝကြပါစေ",
            "အတာ ​ရေ နဲ့ အတူ အထာတွေ ​ပေးနိုင်ပါ​စေ",
            "မုန့်လုံး​ရေ​ပေါ်စားရင် ငြုပ်သီးစိမ်း ​ရှောင်နိုင်ပါ​စေ",
            "အတာ​ရေလို​အေး ပန်းပိ​တောက်လို ​မွှေး၍ ​​ကောင်းကျိုးမင်္ဂလာ အ​ပေါင်းနှင့် ပြည့်စုံကြပါ​စေ",
            "မြန်မာ နှစ်သစ်ကူး အတာသင်္ကြန်မှာ မင်္ဂလာ အ​ပေါင်းနှင့် ပြည့်စုံ၍ ​ပျော်ရွှင် ချမ်း​မြေ့ကြပါ​​စေ​ကြောင်း CMO IT Team မှ အ​ချော​လေးများက ဆု​​တောင်းပေးလိုက်ပါတယ်",
            "နှစ်သစ်ကူးမှာ အချစ်ဦးကို ရှာဖွေနိုင်ပါစေ",
            "ရက်မြတ်သင်္ကြန် အချိန်အခါသမယတွင် CMHL ဝန်ထမ်းမိသားစုများအားလုံး ကျန်းမာ ချမ်းသာ ရွှင်လန်း ချမ်းမြေ့ကြပါစေ"

        ];
        let random = Math.floor(Math.random() * prayers.length);
        $("#pray-text").html(prayers[random]);
        $("#pray-container").hide();
        $("#thingyan-couple-outline").hide();

        $("#overlay").click(() => {
            
            $("#pray-container").fadeOut();
            $("#thingyan-couple-outline").hide();
        });

        $("#thingyan").click(() => {

            let randoms = Math.floor(Math.random() * prayers.length);
            $("#pray-text").html(prayers[randoms]);
            $("#pray-container").fadeIn();
            $("#thingyan-couple-outline").fadeIn();
            $("#snow").css("display","block");
        });

        $("#cross-icon").click(() => {
            $("#pray-container").fadeOut();
            $("#thingyan-couple-outline").fadeOut();
            $("#snow").css("display","none");
            // $("#pray-container").fadeOut();
            // $("#thingyan-couple-outline").fadeOut();
        })
    }
)