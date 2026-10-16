import { useEffect, useMemo, useState } from "react";
import { SettingsContext } from "./settings";

const myanmarText = {
  Home: "ပင်မစာမျက်နှာ",
  Products: "ထုတ်ကုန်များ",
  Services: "ဝန်ဆောင်မှုများ",
  Projects: "ပရောဂျက်များ",
  About: "အကြောင်း",
  "Let's talk": "ဆွေးနွေးကြမယ်",
  "Your ideas, made real": "သင့်အကြံဉာဏ်များကို လက်တွေ့ဖော်ဆောင်ပါ",
  "Better software for a ": "ပိုမိုကောင်းမွန်သော ဆော့ဖ်ဝဲဖြင့် ",
  "better way": "ပိုမိုကောင်းမွန်သော နည်းလမ်း",
  " of doing business.": " ဖြင့် စီးပွားရေးလုပ်ငန်းများ တိုးတက်စေပါ။",
  "We partner with ambitious teams to design and build digital products that make work simpler and growth more meaningful.":
    "လုပ်ငန်းများ ပိုမိုလွယ်ကူစေပြီး တိုးတက်မှုကို အဓိပ္ပာယ်ရှိစေမည့် ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို ဒီဇိုင်းဆွဲတည်ဆောက်ရန် ရည်မှန်းချက်ကြီးသောအဖွဲ့များနှင့် လက်တွဲလုပ်ဆောင်ပါသည်။",
  "Explore our work": "ကျွန်ုပ်တို့၏လက်ရာများ",
  "What we do": "ကျွန်ုပ်တို့လုပ်ဆောင်ပေးသည်များ",
  "Human-first design": "လူကိုဦးစားပေးသော ဒီဇိုင်း",
  "Built to grow": "တိုးတက်မှုအတွက် တည်ဆောက်ထားသည်",
  "A team that cares": "ဂရုစိုက်သောအဖွဲ့",
  "A trusted partner for your next step": "သင့်နောက်တစ်ဆင့်အတွက် ယုံကြည်စိတ်ချရသော လက်တွဲဖော်",
  "How we help": "ကျွန်ုပ်တို့ကူညီပေးပုံ",
  "Good ideas deserve ": "အကြံကောင်းများအတွက် ",
  "good execution.": "ကောင်းမွန်သော အကောင်အထည်ဖော်မှု လိုအပ်သည်။",
  "From the first sketch to the final release, we bring the right people and practical thinking to every step of your product journey.":
    "ပထမဆုံးပုံကြမ်းမှ နောက်ဆုံးထုတ်ဝေမှုအထိ သင့်ထုတ်ကုန်ခရီးစဉ်တစ်လျှောက် မှန်ကန်သောလူများနှင့် လက်တွေ့ကျသောအတွေးအခေါ်များကို ယူဆောင်လာပါသည်။",
  "Product strategy": "ထုတ်ကုန်မဟာဗျူဟာ",
  "Find the right problem, shape a clear roadmap, and make confident decisions.": "မှန်ကန်သောပြဿနာကို ရှာဖွေပြီး ရှင်းလင်းသောလမ်းပြမြေပုံရေးဆွဲကာ ယုံကြည်မှုရှိသော ဆုံးဖြတ်ချက်များချပါ။",
  "Design & experience": "ဒီဇိုင်းနှင့် အသုံးပြုမှုအတွေ့အကြုံ",
  "Make every interaction feel intuitive, thoughtful, and distinctly yours.": "အသုံးပြုမှုတိုင်းကို လွယ်ကူနားလည်ပြီး စဉ်းစားဖန်တီးထားကာ သင့်လုပ်ငန်း၏ကိုယ်ပိုင်ဟန်ဖြစ်စေပါ။",
  "Software development": "ဆော့ဖ်ဝဲဖွံ့ဖြိုးတည်ဆောက်မှု",
  "Build reliable web and mobile products designed to grow with your business.": "သင့်လုပ်ငန်းနှင့်အတူ တိုးတက်နိုင်ရန် ယုံကြည်စိတ်ချရသော ဝဘ်နှင့် မိုဘိုင်းထုတ်ကုန်များ တည်ဆောက်ပါ။",
  "Built with purpose": "ရည်ရွယ်ချက်ရှိစွာ တည်ဆောက်ထားသည်",
  "Our products": "ကျွန်ုပ်တို့၏ထုတ်ကုန်များ",
  "Meet our products": "ထုတ်ကုန်များကို ကြည့်ရန်",
  "A little of what we do": "ကျွန်ုပ်တို့၏ လုပ်ဆောင်မှုအချို့",
  "Work that moves things forward.": "တိုးတက်မှုကို ရှေ့သို့ပို့ဆောင်သော လက်ရာများ။",
  "See all projects": "ပရောဂျက်အားလုံးကြည့်ရန်",
  "Have a good idea?": "အကြံကောင်းတစ်ခု ရှိပါသလား။",
  "Let's make something that matters.": "အဓိပ္ပာယ်ရှိသောအရာတစ်ခုကို အတူဖန်တီးကြပါစို့။",
  "Start a conversation": "စတင်ဆွေးနွေးရန်",
  "Designed for real work": "လက်တွေ့လုပ်ငန်းအတွက် ဒီဇိုင်းဆွဲထားသည်",
  "Tools that make the everyday ": "နေ့စဉ်လုပ်ငန်းများကို ",
  "work better.": "ပိုမိုကောင်းမွန်စေသော ကိရိယာများ။",
  "We build practical, thoughtfully designed products that help people spend less time on busywork and more time on what matters.": "အရေးကြီးသောအလုပ်များအတွက် အချိန်ပိုရစေပြီး မလိုအပ်သောအလုပ်များတွင် အချိန်လျော့နည်းစေမည့် လက်တွေ့ကျပြီး သေချာစဉ်းစားဒီဇိုင်းဆွဲထားသော ထုတ်ကုန်များကို တည်ဆောက်ပါသည်။",
  "Looking for something built around you?": "သင့်လိုအပ်ချက်အတွက် သီးသန့်တည်ဆောက်လိုပါသလား။",
  "Our team can help take your product idea from first sketch to launch.": "သင့်ထုတ်ကုန်အကြံဉာဏ်ကို ပထမပုံကြမ်းမှ စတင်မိတ်ဆက်ချိန်အထိ ကျွန်ုပ်တို့အဖွဲ့က ကူညီပေးနိုင်ပါသည်။",
  "Talk to our team": "ကျွန်ုပ်တို့အဖွဲ့နှင့် ဆွေးနွေးရန်",
  "Selected work": "ရွေးချယ်ထားသော လက်ရာများ",
  "A few good things, ": "အတူဖန်တီးခဲ့သော ",
  "made together.": "ကောင်းမွန်သည့်အရာအချို့။",
  "Every project starts with listening. Here are a few of the partnerships and digital experiences we're proud to share.": "ပရောဂျက်တိုင်းသည် သင့်လိုအပ်ချက်ကို နားထောင်ခြင်းမှ စတင်ပါသည်။ ကျွန်ုပ်တို့ဂုဏ်ယူစွာ မျှဝေလိုသည့် လက်တွဲမှုနှင့် ဒစ်ဂျစ်တယ်အတွေ့အကြုံအချို့ကို ကြည့်ရှုပါ။",
  "A little about us": "ကျွန်ုပ်တို့အကြောင်း",
  "Good technology starts with ": "ကောင်းမွန်သောနည်းပညာသည် ",
  "understanding people.": "လူများကို နားလည်ခြင်းမှ စတင်သည်။",
  "Ophir iT Solution is a thoughtful software partner for teams ready to make useful things and make a difference.": "Ophir iT Solution သည် အသုံးဝင်သောအရာများ ဖန်တီးပြီး အပြောင်းအလဲဖြစ်စေရန် အသင့်ဖြစ်သောအဖွဲ့များအတွက် ယုံကြည်စိတ်ချရသော ဆော့ဖ်ဝဲလက်တွဲဖော်ဖြစ်ပါသည်။",
  "People first": "လူကို ဦးစားပေးသည်",
  "Technology only matters when it makes life better for the people using it.": "နည်းပညာသည် အသုံးပြုသူများ၏ဘဝကို ပိုမိုကောင်းမွန်စေမှသာ အဓိပ္ပာယ်ရှိသည်။",
  "Curious by nature": "စူးစမ်းလိုစိတ်ရှိသည်",
  "We ask good questions, stay open to new ideas, and keep learning as we go.": "မေးခွန်းကောင်းများမေးပြီး အကြံသစ်များကို လက်ခံကာ အစဉ်လေ့လာသင်ယူပါသည်။",
  "In it together": "အတူတကွ လက်တွဲသည်",
  "The best work happens when we act like partners, not just another vendor.": "ရောင်းချသူသက်သက်မဟုတ်ဘဲ လက်တွဲဖော်အဖြစ် ဆောင်ရွက်သောအခါ အကောင်းဆုံးရလဒ်များ ရရှိပါသည်။",
  "Get to know our work": "ကျွန်ုပ်တို့၏လက်ရာများကို ကြည့်ရန်",
  "From the first big question to the ": "ပထမဆုံးမေးခွန်းမှ ",
  "finished product.": "ပြီးပြည့်စုံသောထုတ်ကုန်အထိ။",
  "A practical, people-first team for the moments that matter in your product journey.": "သင့်ထုတ်ကုန်ခရီးစဉ်၏ အရေးကြီးသောအဆင့်တိုင်းအတွက် လူကိုဦးစားပေးသော လက်တွေ့ကျသည့်အဖွဲ့။",
  "Have a challenge in mind?": "ဖြေရှင်းလိုသည့် စိန်ခေါ်မှုရှိပါသလား။",
  "Let's find the right next step, together.": "မှန်ကန်သောနောက်တစ်ဆင့်ကို အတူရှာဖွေကြပါစို့။",
  "Meet our team": "ကျွန်ုပ်တို့အဖွဲ့နှင့် တွေ့ဆုံရန်",
  "Thoughtful work, built around real people.": "လူများ၏လိုအပ်ချက်ကို အခြေခံ၍ စဉ်းစားတည်ဆောက်ထားသော လက်ရာ။",
  "The partnership": "လက်တွဲဆောင်ရွက်မှု",
  "What we brought": "ကျွန်ုပ်တို့၏ ပါဝင်ကူညီမှု",
  "The outcome": "ရလဒ်",
  "More projects": "ပရောဂျက်များ ထပ်မံကြည့်ရန်",
  "Start a project like this": "ဤကဲ့သို့သော ပရောဂျက်စတင်ရန်",
  "All products": "ထုတ်ကုန်အားလုံး",
  "All projects": "ပရောဂျက်အားလုံး",
  "Ask us about ": "မေးမြန်းရန် ",
  "Made to make work feel easier.": "လုပ်ငန်းများ ပိုမိုလွယ်ကူစေရန် ဖန်တီးထားသည်။",
  "Built around people": "လူများကို ဗဟိုပြုတည်ဆောက်ထားသည်",
  "A good product should make a real difference.": "ထုတ်ကုန်ကောင်းတစ်ခုသည် အမှန်တကယ် အပြောင်းအလဲဖြစ်စေသင့်သည်။",
  "We combine clear thinking, thoughtful design, and dependable engineering to create products your team will enjoy using.": "သင့်အဖွဲ့ အသုံးပြုရနှစ်သက်မည့် ထုတ်ကုန်များဖန်တီးရန် ရှင်းလင်းသောအတွေးအခေါ်၊ သေချာစဉ်းစားထားသော ဒီဇိုင်းနှင့် ယုံကြည်စိတ်ချရသော အင်ဂျင်နီယာပညာတို့ကို ပေါင်းစပ်ထားပါသည်။",
  "See what we've built": "ကျွန်ုပ်တို့တည်ဆောက်ထားသည်များကို ကြည့်ရန်",
  "Product not found": "ထုတ်ကုန်ကို မတွေ့ပါ",
  "Let's find the right tool.": "သင့်အတွက်သင့်တော်သော ကိရိယာကို ရှာဖွေကြပါစို့။",
  "Browse all products": "ထုတ်ကုန်အားလုံးကို ကြည့်ရန်",
  "Project not found": "ပရောဂျက်ကို မတွေ့ပါ",
  "There's more work to explore.": "လေ့လာရန် လက်ရာများ ထပ်ရှိပါသေးသည်။",
  "Browse all projects": "ပရောဂျက်အားလုံးကို ကြည့်ရန်",
  "We make thoughtful digital products for people and businesses ready to move forward.": "ရှေ့သို့တက်လှမ်းရန် အသင့်ဖြစ်သော လူများနှင့် လုပ်ငန်းများအတွက် သေချာစဉ်းစားဖန်တီးထားသည့် ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို ပြုလုပ်ပါသည်။",
  "We bring clear thinking, good design, and dependable engineering together—so your next idea can become something people love to use.": "သင့်အကြံဉာဏ်ကို လူများနှစ်သက်စွာ အသုံးပြုမည့်အရာအဖြစ် ပြောင်းလဲနိုင်ရန် ရှင်းလင်းသောအတွေးအခေါ်၊ ကောင်းမွန်သောဒီဇိုင်းနှင့် ယုံကြည်စိတ်ချရသော အင်ဂျင်နီယာပညာတို့ကို ပေါင်းစပ်ပါသည်။",
  "Let's talk about your idea": "သင့်အကြံဉာဏ်အကြောင်း ဆွေးနွေးရန်",
  "Light mode": "အလင်းရောင်ပုံစံ",
  "Dark mode": "အမှောင်ပုံစံ",
  "Switch to Myanmar": "မြန်မာဘာသာသို့ ပြောင်းရန်",
  "Switch to English": "အင်္ဂလိပ်ဘာသာသို့ ပြောင်းရန်",
  "Show previous product": "ယခင်ထုတ်ကုန်ကို ပြရန်",
  "Show next product": "နောက်ထုတ်ကုန်ကို ပြရန်",
  "Featured products carousel. Use left and right arrow keys to change slides.": "အထူးဖော်ပြထားသော ထုတ်ကုန်များ။ ဘယ်/ညာမြှားခလုတ်များဖြင့် ပြောင်းနိုင်သည်။",
  "Your overview": "သင့်အကျဉ်းချုပ်",
  "Here's what's happening today.": "ယနေ့ဖြစ်ပျက်နေသည်များ။",
  "Weekly progress": "အပတ်စဉ်တိုးတက်မှု",
  "This week": "ယခုအပတ်",
  "A clearer view of your day": "သင့်နေ့စဉ်လုပ်ငန်းများကို ပိုမိုရှင်းလင်းစွာကြည့်ရန်",
  "workspace": "အလုပ်ခွင်",
  "Show": "ပြရန်",
  "Explore": "ကြည့်ရန်",
};

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("ophir-language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("ophir-theme") || "light");

  useEffect(() => {
    localStorage.setItem("ophir-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem("ophir-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    setTheme,
    t: (text) => language === "my" ? myanmarText[text] ?? text : text,
  }), [language, theme]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
