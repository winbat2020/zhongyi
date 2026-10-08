export interface Herb {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  properties: string;
  flavor: string;
  meridian: string;
  functions: string[];
  indications: string[];
  usage: string;
  dosage: string;
  contraindications: string[];
  image: string;
  description: string;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  benefits: string[];
  conditions: string[];
  sessions: string;
  price: string;
}

export const herbs: Herb[] = [
  {
    id: 'ren-shen',
    name: '人参',
    scientificName: 'Panax ginseng',
    category: '补气药',
    properties: '微温',
    flavor: '甘、微苦',
    meridian: '脾、肺、心',
    functions: ['大补元气', '复脉固脱', '补脾益肺', '生津养血', '安神益智'],
    indications: ['体虚欲脱', '肢冷脉微', '脾虚食少', '肺虚喘咳', '津伤口渴', '内热消渴', '久病虚赢', '惊悸失眠'],
    usage: '宜文火另煎，兑入药液服用',
    dosage: '3-9g',
    contraindications: ['实证、热证而正气不虚者忌服', '反藜芦', '畏五灵脂'],
    image: '/herbs/ginseng.jpg',
    description: '人参为五加科植物人参的干燥根和根茎，主产于东北，有"百草之王"的美誉。'
  },
  {
    id: 'dang-shen',
    name: '党参',
    scientificName: 'Codonopsis pilosula',
    category: '补气药',
    properties: '平',
    flavor: '甘',
    meridian: '脾、肺',
    functions: ['补中益气', '健脾益肺', '养血生津'],
    indications: ['脾肺气虚', '食少便溏', '咳嗽气短', '气血两虚', '面色萎黄', '乏力懒言'],
    usage: '煎服',
    dosage: '9-30g',
    contraindications: ['实证、热证慎用', '不宜与藜芦同用'],
    image: '/herbs/dangshen.jpg',
    description: '党参为桔梗科植物党参的干燥根，主产于山西、陕西、甘肃等地。'
  },
  {
    id: 'huang-qi',
    name: '黄芪',
    scientificName: 'Astragalus membranaceus',
    category: '补气药',
    properties: '微温',
    flavor: '甘',
    meridian: '肺、脾',
    functions: ['补气升阳', '固表止汗', '利水消肿', '托毒生肌', '益卫固表'],
    indications: ['气虚乏力', '食少便溏', '中气下陷', '久泻脱肛', '气虚水肿', '自汗盗汗', '气血不足'],
    usage: '生用益气固表，炙用补中益气',
    dosage: '9-30g',
    contraindications: ['表实邪盛', '气滞湿阻', '食积内停', '阴虚阳亢'],
    image: '/herbs/astragalus.jpg',
    description: '黄芪为豆科植物蒙古黄芪或膜荚黄芪的干燥根，被誉为"补气之长"。'
  },
  {
    id: 'dang-gui',
    name: '当归',
    scientificName: 'Angelica sinensis',
    category: '补血药',
    properties: '温',
    flavor: '甘、辛',
    meridian: '肝、心、脾',
    functions: ['补血活血', '调经止痛', '润肠通便'],
    indications: ['血虚萎黄', '眩晕心悸', '月经不调', '经闭痛经', '虚寒腹痛', '肠燥便秘', '跌扑损伤'],
    usage: '酒炒增强活血作用，土炒增强健脾作用',
    dosage: '6-12g',
    contraindications: ['湿盛中满', '大便溏泻', '月经过多'],
    image: '/herbs/danggui.jpg',
    description: '当归为伞形科植物当归的干燥根，主产于甘肃，有"血中圣药"之称。'
  },
  {
    id: 'shu-di-huang',
    name: '熟地黄',
    scientificName: 'Rehmannia glutinosa',
    category: '补血药',
    properties: '微温',
    flavor: '甘',
    meridian: '肝、肾',
    functions: ['滋阴补血', '益精填髓'],
    indications: ['血虚萎黄', '眩晕心悸', '月经不调', '崩漏', '肝肾阴虚', '腰膝酸软', '骨蒸潮热', '盗汗遗精'],
    usage: '砂仁拌蒸可防其滋腻碍胃',
    dosage: '9-15g',
    contraindications: ['脾胃虚弱', '湿滞中满', '痰多'],
    image: '/herbs/rehmannia.jpg',
    description: '熟地黄为玄参科植物地黄的新鲜块根经九蒸九晒制成，为滋阴补血要药。'
  },
  {
    id: 'gou-qi-zi',
    name: '枸杞子',
    scientificName: 'Lycium barbarum',
    category: '补阴药',
    properties: '平',
    flavor: '甘',
    meridian: '肝、肾',
    functions: ['滋补肝肾', '益精明目'],
    indications: ['肝肾阴虚', '腰膝酸软', '眩晕耳鸣', '遗精', '内热消渴', '血虚萎黄', '目昏不明'],
    usage: '直接食用或煎服',
    dosage: '6-12g',
    contraindications: ['外邪实热', '脾虚便溏'],
    image: '/herbs/goji.jpg',
    description: '枸杞子为茄科植物宁夏枸杞的干燥成熟果实，主产于宁夏，为滋补良药。'
  },
  {
    id: 'bai-zhu',
    name: '白术',
    scientificName: 'Atractylodes macrocephala',
    category: '补气药',
    properties: '温',
    flavor: '苦、甘',
    meridian: '脾、胃',
    functions: ['健脾益气', '燥湿利水', '止汗', '安胎'],
    indications: ['脾虚食少', '腹胀泄泻', '痰饮', '水肿', '自汗', '胎动不安'],
    usage: '炒用健脾止泻，生用燥湿利水',
    dosage: '6-12g',
    contraindications: ['阴虚内热', '津伤口渴'],
    image: '/herbs/atractylodes.jpg',
    description: '白术为菊科植物白术的干燥根茎，主产于浙江，为健脾要药。'
  },
  {
    id: 'gan-cao',
    name: '甘草',
    scientificName: 'Glycyrrhiza uralensis',
    category: '补气药',
    properties: '平',
    flavor: '甘',
    meridian: '心、肺、脾、胃',
    functions: ['补脾益气', '清热解毒', '祛痰止咳', '缓急止痛', '调和诸药'],
    indications: ['脾胃虚弱', '倦怠乏力', '心悸气短', '咳嗽气喘', '脘腹或四肢挛急疼痛', '药物中毒'],
    usage: '生用清热，炙用补气',
    dosage: '2-10g',
    contraindications: ['湿盛胀满', '水肿', '大剂量长期服用致水钠潴留'],
    image: '/herbs/licorice.jpg',
    description: '甘草为豆科植物甘草、胀果甘草或光果甘草的干燥根和根茎，被誉为"国老"。'
  }
];

export const treatments: Treatment[] = [
  {
    id: 'zhen-jiu',
    name: '针灸治疗',
    category: '外治法',
    icon: 'needle',
    description: '针灸是中医传统治疗方法之一，通过刺激特定穴位调节气血运行，平衡阴阳，达到治病养生的目的。',
    benefits: ['疏通经络', '调和气血', '平衡阴阳', '扶正祛邪'],
    conditions: ['颈肩腰腿痛', '头痛偏头痛', '失眠', '焦虑抑郁', '消化不良', '月经不调', '面瘫'],
    sessions: '每次20-40分钟，疗程视病情而定',
    price: '180-380元/次'
  },
  {
    id: 'tui-na',
    name: '推拿按摩',
    category: '外治法',
    icon: 'hands',
    description: '推拿是以中医理论为指导，运用各种手法作用于人体体表特定部位，调节机体生理病理状况，达到防治疾病的方法。',
    benefits: ['舒筋活络', '理筋整复', '滑利关节', '行气活血'],
    conditions: ['颈椎病', '腰椎间盘突出', '肩周炎', '落枕', '肌肉劳损', '疲劳综合症'],
    sessions: '每次30-60分钟',
    price: '200-400元/次'
  },
  {
    id: 'ba-guan',
    name: '拔罐疗法',
    category: '外治法',
    icon: 'cup',
    description: '拔罐是以罐为工具，利用燃烧、抽气等方法产生负压，使之吸附于体表，造成局部瘀血，以达到通经活络、行气活血、消肿止痛、祛风散寒的目的。',
    benefits: ['祛风散寒', '消肿止痛', '疏通经络', '行气活血'],
    conditions: ['风寒湿痹', '颈肩腰痛', '感冒咳嗽', '疲劳综合症'],
    sessions: '每次10-20分钟',
    price: '80-150元/次'
  },
  {
    id: 'zhong-yao',
    name: '中药调理',
    category: '内治法',
    icon: 'herb',
    description: '根据中医辨证论治原则，运用中药的性味归经，针对个体体质和病情进行个性化配方，调理身体失衡状态。',
    benefits: ['辨证施治', '标本兼治', '调理体质', '增强免疫'],
    conditions: ['慢性病调理', '亚健康状态', '妇科杂病', '脾胃病', '失眠焦虑'],
    sessions: '需根据病情制定疗程',
    price: '150-500元/疗程'
  },
  {
    id: 'xue-zi',
    name: '穴位贴敷',
    category: '外治法',
    icon: 'patch',
    description: '将药物制成膏贴或散剂，敷贴于特定穴位，通过经络传导和药物吸收，达到治疗疾病的目的。',
    benefits: ['直达病所', '避免肝脏首过效应', '持续给药', '简便易行'],
    conditions: ['冬病夏治', '慢性支气管炎', '哮喘', '过敏性鼻炎', '痛经'],
    sessions: '每次2-6小时，视皮肤反应而定',
    price: '100-200元/次'
  },
  {
    id: 'jian-ti',
    name: '体质辨识',
    category: '预防保健',
    icon: 'check',
    description: '运用中医九种体质分类理论，通过问诊、观察等方法，辨识个人体质类型，提供针对性的养生指导和干预方案。',
    benefits: ['了解体质', '预防为主', '个性化调理', '治未病'],
    conditions: ['健康咨询', '亚健康调理', '慢性病预防', '养生保健'],
    sessions: '约30分钟',
    price: '120元/次'
  }
];

export const doctors = [
  {
    id: 'doctor-1',
    name: '张明远',
    title: '主任医师',
    specialty: '针灸、痛症',
    experience: '30年',
    bio: '张明远医师，出身中医世家，从事中医临床工作30余年。擅长针灸治疗颈肩腰腿痛、面瘫、头痛等神经系统疾病，以及中药调理慢性病。',
    image: '/doctors/zhang-mingyuan.jpg'
  },
  {
    id: 'doctor-2',
    name: '李素琴',
    title: '副主任医师',
    specialty: '妇科、内科',
    experience: '25年',
    bio: '李素琴医师，毕业于北京中医药大学，擅长运用中医辨证论治治疗妇科月经不调、痛经、不孕症，以及内科脾胃病、失眠等。',
    image: '/doctors/li-suqin.jpg'
  },
  {
    id: 'doctor-3',
    name: '王建国',
    title: '主治医师',
    specialty: '推拿、康复',
    experience: '15年',
    bio: '王建国医师，师从国医名师，精通推拿手法，擅长治疗颈椎病、腰椎间盘突出、肩周炎等骨关节疾病，以及运动损伤康复。',
    image: '/doctors/wang-jianguo.jpg'
  }
];

export const categories = {
  herbCategories: [
    '补气药', '补血药', '补阴药', '补阳药',
    '解表药', '清热药', '祛湿药', '活血化瘀药',
    '理气药', '化痰止咳药', '消食药', '安神药'
  ],
  treatmentCategories: [
    '外治法', '内治法', '预防保健'
  ]
};
