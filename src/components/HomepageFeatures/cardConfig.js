const avatarDir = "img/pixel_cards"

const avatarStyle = {width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px"}

const avatarBoxStyle = {display: 'flex', flexDirection: 'column', alignItems: 'center'}

const avatarFrame = {display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))', gap: '20px'}

const avatarNameStyle = {
    textAlign: 'center', 
    width: "9ch", 
    wordWrap: "break-word", 
    fontSize: "10px",
    lineHeight: "1"
}

const docDir = "/docs"

const rarityMap = {
  "普通": "common",
  "稀有": "rare", 
  "史诗": "epic",
  "传说": "legendary",
  "禁忌": "dark",
  "光辉": "mythic"
}

const typeMap = {
    "召唤卡": "creatures",
    "咒语卡": "spells",
    "伙伴卡": "companians"
}



export {avatarDir, avatarStyle, avatarNameStyle, avatarFrame, avatarBoxStyle, docDir, rarityMap, typeMap}