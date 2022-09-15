export type Concierge = {
  img: string;
  name: string;
  food: string;
  work: string;
  comment: string;
};

export type Concierges = {
  [key: string]: Concierge;
};

export const concierges: Concierges = {
  "1": {
    img: "https://1.bp.blogspot.com/-s6UiIzTDFWA/U6llbDRoynI/AAAAAAAAhxA/WS5Dj5sXhJU/s400/job_seiniku.png",
    name: "田中太郎",
    food: "豚肉，牛肉，鶏肉",
    work: "田中精肉店",
    comment:
      "札幌の肉屋の3代目です！代々培ってきたお肉に関する知識を総動員して，あなたにぴったりのお肉を提供します",
  },

  "2": {
    img: "https://4.bp.blogspot.com/-6rYdhifvfn8/Wi4fx1bexkI/AAAAAAABIqk/L0r9PHQMQU8nUku6uuoIlghnt22Gh6q6QCLcBGAs/s800/animal_chara_neko_sakanaya.png",
    name: "魚好蔵",
    food: "北陸地方の魚全般",
    work: "好蔵商店",
    comment:
      "要望に合わせた魚を市場で仕入れて来ますので，どうぞよろしくお願いいたします．",
  },
  "3": {
    img: "https://4.bp.blogspot.com/-aI8NQv8G4xI/UdEec3vlcDI/AAAAAAAAVv0/lIUBbdSTI3I/s450/job_yaoya.png",
    name: "野呂葉次郎",
    food: "野菜全般",
    work: "野呂青果店",
    comment:
      "東京の下町で八百屋を経営しています．その関係で，市場や農家への伝手が多くありますので，質の良い野菜をお安く提供できます．",
  },
  "4": {
    img: "https://1.bp.blogspot.com/-jaBg8xHz9_I/WtRzeK71_rI/AAAAAAABLmo/GpGCcRndx38I__C6B8csUJXMfUE02POFACLcBGAs/s800/sennin_kuchu_fuyuu.png",
    name: "山田かず",
    food: "九州地方の魚全般",
    work: "元寿司職人",
    comment:
      "金沢で寿司を握っておりました．魚の目利きから調理方法まで熟知しておりますので，なんでもお聞きください．",
  },
};
