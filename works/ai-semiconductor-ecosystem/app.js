const segments = [
  {
    id: "cloud_demand",
    layer: "需求端",
    group: "demand",
    name: "云与模型训练/推理需求",
    devices: "AI 集群、训练 pod、推理 pod、定制 ASIC 项目、AI factory、数据中心 capex",
    players: ["microsoft", "amazon", "google", "meta", "oracle"],
  },
  {
    id: "server_system",
    layer: "系统",
    group: "system",
    name: "AI 服务器与整机",
    devices: "HGX/GB 系统、OAM 模组、主板、背板、机柜、BMC、PCIe/CXL 拓扑",
    players: ["dell", "supermicro", "quanta", "wiwynn", "fii"],
  },
  {
    id: "ai_accelerator_design",
    layer: "芯片设计",
    group: "design",
    name: "AI 加速器/GPU/XPU",
    devices: "GPU die、tensor core、MAC array、SRAM、NoC、HBM controller、PCIe/CXL、SerDes",
    players: ["nvidia", "amd", "broadcom", "google", "amazon"],
  },
  {
    id: "cloud_custom_asic",
    layer: "芯片设计",
    group: "design",
    name: "云厂商自研 AI ASIC",
    devices: "TPU、Trainium、Maia、MTIA、inference ASIC、training ASIC、片上 SRAM、矩阵乘法阵列",
    players: ["google", "amazon", "microsoft", "meta", "tesla"],
  },
  {
    id: "host_cpu",
    layer: "芯片设计",
    group: "design",
    name: "CPU 与主机处理器",
    devices: "x86 CPU、Arm Neoverse CPU、chiplet CPU、I/O die、CXL host、内存控制器",
    players: ["amd", "intel", "arm", "ampere", "qualcomm"],
  },
  {
    id: "processor_ip",
    layer: "IP",
    group: "design",
    name: "处理器与接口 IP",
    devices: "Arm CPU IP、RISC-V IP、GPU/NPU IP、PCIe/CXL controller、SerDes、HBM PHY、UCIe PHY",
    players: ["arm", "synopsys", "cadence", "ceva", "imagination"],
  },
  {
    id: "eda",
    layer: "软件",
    group: "design",
    name: "EDA 与验证",
    devices: "RTL synthesis、place & route、DRC/LVS、timing closure、power integrity、emulation、3DIC simulation",
    players: ["synopsys", "cadence", "siemens_eda", "ansys", "silvaco"],
  },
  {
    id: "advanced_logic_foundry",
    layer: "制造",
    group: "manufacturing",
    name: "先进逻辑晶圆代工",
    devices: "5nm/4nm/3nm/2nm logic、FinFET/GAA、EUV/DUV patterning、BEOL interconnect",
    players: ["tsmc", "samsung", "intel", "globalfoundries", "smic"],
  },
  {
    id: "hbm_memory",
    layer: "存储",
    group: "memory",
    name: "HBM/DRAM",
    devices: "HBM3E、HBM4、DRAM die、base logic die、TSV、microbump、MR-MUF、TC-NCF、DDR5",
    players: ["sk_hynix", "samsung", "micron", "cxmt", "nanya"],
  },
  {
    id: "nand_storage",
    layer: "存储",
    group: "memory",
    name: "NAND/SSD/存储控制",
    devices: "NAND flash、enterprise SSD、SSD controller、PCIe/NVMe controller、QLC/TLC NAND",
    players: ["samsung", "micron", "kioxia", "western_digital", "sk_hynix"],
  },
  {
    id: "advanced_packaging",
    layer: "封装",
    group: "packaging",
    name: "先进封装/异构集成",
    devices: "2.5D interposer、CoWoS、SoIC、EMIB、Foveros、I-Cube/X-Cube、fan-out、hybrid bonding",
    players: ["tsmc", "intel", "samsung", "ase", "amkor"],
  },
  {
    id: "osat",
    layer: "封测",
    group: "packaging",
    name: "OSAT 与封装测试",
    devices: "flip-chip BGA、SiP、wafer bumping、2.5D assembly、final test、burn-in",
    players: ["ase", "amkor", "jcet", "pti", "tongfu"],
  },
  {
    id: "abf_substrate",
    layer: "封装材料",
    group: "materials",
    name: "ABF/封装基板",
    devices: "ABF substrate、BT substrate、build-up film、coreless substrate、copper foil、solder resist",
    players: ["ibiden", "unimicron", "shinko", "nan_ya_pcb", "ats"],
  },
  {
    id: "photomask",
    layer: "材料",
    group: "materials",
    name: "Photomask/reticle",
    devices: "EUV mask、DUV mask、pellicle、mask blank、OPC/MDP 数据",
    players: ["toppan", "dnp", "photronics", "hoya", "sk_electronics"],
  },
  {
    id: "silicon_wafer",
    layer: "材料",
    group: "materials",
    name: "晶圆材料",
    devices: "300mm prime wafer、SOI wafer、epi wafer、silicon ingot、polished wafer",
    players: ["shin_etsu_handotai", "sumco", "globalwafers", "siltronic", "sk_siltron"],
  },
  {
    id: "chemicals_resist",
    layer: "材料",
    group: "materials",
    name: "光刻胶/湿化学/CMP",
    devices: "EUV photoresist、developer、etch chemicals、CMP slurry/pad、cleaning chemicals、precursors",
    players: ["jsr", "tok", "shin_etsu_chemical", "merck", "entegris"],
  },
  {
    id: "specialty_gases",
    layer: "材料",
    group: "materials",
    name: "特种气体/工业气体",
    devices: "neon、argon、nitrogen、hydrogen、fluorine compounds、CVD/etch gases",
    players: ["linde", "air_liquide", "air_products", "nippon_sanso", "sk_materials"],
  },
  {
    id: "lithography_equipment",
    layer: "设备",
    group: "equipment",
    name: "光刻设备",
    devices: "EUV scanner、High-NA EUV、DUV immersion、alignment module、lithography metrology",
    players: ["asml", "nikon", "canon", "smee", "suss"],
  },
  {
    id: "process_equipment",
    layer: "设备",
    group: "equipment",
    name: "沉积/刻蚀/清洗/CMP",
    devices: "CVD、PVD、ALD、plasma etch、atomic-layer etch、clean、CMP、thermal processing",
    players: ["applied_materials", "lam_research", "tokyo_electron", "asm_international", "kokusai"],
  },
  {
    id: "metrology_inspection",
    layer: "设备",
    group: "equipment",
    name: "量测/检测/过程控制",
    devices: "wafer inspection、e-beam inspection、CD-SEM、overlay metrology、yield management",
    players: ["kla", "applied_materials", "hitachi_high_tech", "onto", "nova"],
  },
  {
    id: "test_equipment",
    layer: "测试",
    group: "equipment",
    name: "ATE/探针/老化",
    devices: "SoC tester、memory tester、probe card、burn-in system、socket、handler",
    players: ["advantest", "teradyne", "formfactor", "cohu", "chroma"],
  },
  {
    id: "networking_silicon",
    layer: "互连",
    group: "interconnect",
    name: "数据中心网络 ASIC/NIC/DPU",
    devices: "Ethernet switch ASIC、InfiniBand switch、SmartNIC/DPU、retimer、redriver、DSP、PHY",
    players: ["broadcom", "nvidia", "marvell", "intel", "cisco"],
  },
  {
    id: "optical_interconnect",
    layer: "互连",
    group: "interconnect",
    name: "光模块/硅光/CPO",
    devices: "800G/1.6T transceiver、DSP、TIA、driver、EML/VCSEL、photodiode、silicon photonics PIC、CPO",
    players: ["coherent", "lumentum", "innolight", "broadcom", "marvell"],
  },
  {
    id: "pcb_connectors",
    layer: "板级",
    group: "system",
    name: "PCB/连接器/线缆",
    devices: "high-speed PCB、backplane、copper cable、connector、socket、retimer card",
    players: ["ttm", "fii", "amphenol", "molex", "te_connectivity"],
  },
  {
    id: "power_management",
    layer: "电源",
    group: "infrastructure",
    name: "电源管理/功率器件",
    devices: "VRM controller、DrMOS、power stage、MOSFET、GaN、inductor、capacitor、power shelf、UPS",
    players: ["mps", "infineon", "delta", "texas_instruments", "vicor"],
  },
  {
    id: "cooling_racks",
    layer: "基础设施",
    group: "infrastructure",
    name: "液冷与机柜基础设施",
    devices: "cold plate、manifold、CDU、pump、quick disconnect、rear-door heat exchanger、immersion cooling、rack PDU",
    players: ["vertiv", "schneider", "delta", "eaton", "nvent"],
  },
  {
    id: "standards_ecosystem",
    layer: "生态",
    group: "ecosystem",
    name: "互联与 chiplet 标准",
    devices: "UCIe、PCIe、CXL、Ethernet、Open Compute Project、OpenBMC、JEDEC HBM",
    players: ["pci_sig", "cxl", "ucie", "ocp", "jedec"],
  },
];

const companies = {
  microsoft: {
    name: "Microsoft",
    country: "US",
    city: "Redmond",
    address: "One Microsoft Way, Redmond, WA, US",
    lat: 47.642,
    lon: -122.136,
    ceo: "Satya Nadella",
    founded: "1975",
    founders: "Bill Gates; Paul Allen",
    role: "Azure AI、Maia/数据中心需求",
    source: "https://www.microsoft.com/en-us/Investor",
    confidence: "seed",
    summary: "云端 AI 需求、GPU 集群采购和 Maia 自研加速器共同塑造上游半导体供应。"
  },
  amazon: {
    name: "Amazon / AWS",
    country: "US",
    city: "Seattle",
    address: "410 Terry Ave N, Seattle, WA, US",
    lat: 47.622,
    lon: -122.337,
    ceo: "Andy Jassy",
    founded: "1994",
    founders: "Jeff Bezos",
    role: "AWS Trainium/Inferentia、云 AI 需求",
    source: "https://www.aboutamazon.com/",
    confidence: "seed",
    summary: "AWS 同时是最大 AI 云需求方之一，也是 Trainium 和 Inferentia 自研芯片路线的核心玩家。"
  },
  google: {
    name: "Google / Alphabet",
    country: "US",
    city: "Mountain View",
    address: "1600 Amphitheatre Pkwy, Mountain View, CA, US",
    lat: 37.422,
    lon: -122.084,
    ceo: "Sundar Pichai",
    founded: "1998",
    founders: "Larry Page; Sergey Brin",
    role: "TPU、AI 云、模型训练需求",
    source: "https://abc.xyz/investor/",
    confidence: "seed",
    summary: "TPU 使 Google 成为云厂商自研 AI ASIC 的代表，同时也是先进封装、HBM 和云数据中心需求源。"
  },
  meta: {
    name: "Meta",
    country: "US",
    city: "Menlo Park",
    address: "1 Hacker Way, Menlo Park, CA, US",
    lat: 37.484,
    lon: -122.148,
    ceo: "Mark Zuckerberg",
    founded: "2004",
    founders: "Mark Zuckerberg and co-founders",
    role: "MTIA、AI 训练/推理需求",
    source: "https://investor.fb.com/",
    confidence: "seed",
    summary: "大规模推荐系统和生成式 AI 训练带来持续 GPU 需求，并推动 MTIA 等自研推理芯片。"
  },
  oracle: {
    name: "Oracle",
    country: "US",
    city: "Austin",
    address: "2300 Oracle Way, Austin, TX, US",
    lat: 30.267,
    lon: -97.743,
    ceo: "Safra Catz",
    founded: "1977",
    founders: "Larry Ellison; Bob Miner; Ed Oates",
    role: "OCI AI infrastructure",
    source: "https://investor.oracle.com/",
    confidence: "seed",
    summary: "OCI 通过 AI 数据中心和 GPU 云服务进入半导体需求网络。"
  },
  dell: {
    name: "Dell Technologies",
    country: "US",
    city: "Round Rock",
    address: "One Dell Way, Round Rock, TX, US",
    lat: 30.508,
    lon: -97.678,
    ceo: "Michael Dell",
    founded: "1984",
    founders: "Michael Dell",
    role: "AI 服务器与企业整机",
    source: "https://investors.delltechnologies.com/",
    confidence: "seed",
    summary: "把 GPU、CPU、网络、存储和散热整合为企业与云客户可采购的 AI 系统。"
  },
  supermicro: {
    name: "Supermicro",
    country: "US",
    city: "San Jose",
    address: "980 Rock Ave, San Jose, CA, US",
    lat: 37.383,
    lon: -121.918,
    ceo: "Charles Liang",
    founded: "1993",
    founders: "Charles Liang",
    role: "GPU 服务器、液冷整机",
    source: "https://ir.supermicro.com/",
    confidence: "seed",
    summary: "以快速集成 NVIDIA/AMD 平台和高密度 AI 服务器闻名，连接芯片与数据中心部署。"
  },
  quanta: {
    name: "Quanta Computer",
    country: "Taiwan",
    city: "Taoyuan",
    address: "Guishan District, Taoyuan, Taiwan",
    lat: 24.99,
    lon: 121.31,
    ceo: "C.C. Leung",
    founded: "1988",
    founders: "Barry Lam",
    role: "ODM、AI 服务器制造",
    source: "https://www.quantatw.com/",
    confidence: "seed",
    summary: "台系 ODM 代表，承接云客户与芯片平台的 AI 服务器制造和系统整合。"
  },
  wiwynn: {
    name: "Wiwynn",
    country: "Taiwan",
    city: "New Taipei",
    address: "Xizhi District, New Taipei City, Taiwan",
    lat: 25.064,
    lon: 121.653,
    ceo: "Emily Hong",
    founded: "2012",
    founders: "Wistron cloud infrastructure lineage",
    role: "云端 AI 服务器 ODM",
    source: "https://www.wiwynn.com/",
    confidence: "seed",
    summary: "聚焦 hyperscale 数据中心，处在云厂商、GPU 平台和机柜级系统之间。"
  },
  fii: {
    name: "Foxconn Industrial Internet",
    country: "China",
    city: "Shenzhen",
    address: "Shenzhen, Guangdong, China",
    lat: 22.543,
    lon: 114.058,
    ceo: "Leadership pending verification",
    founded: "2015",
    founders: "Foxconn / Hon Hai lineage",
    role: "服务器制造、PCB/系统整合",
    source: "https://www.fii-foxconn.com/",
    confidence: "seed",
    summary: "富士康体系中的工业互联网与服务器制造平台，是 AI 服务器供应链的重要制造节点。"
  },
  nvidia: {
    name: "NVIDIA",
    country: "US",
    city: "Santa Clara",
    address: "2788 San Tomas Expressway, Santa Clara, CA, US",
    lat: 37.37,
    lon: -121.965,
    ceo: "Jensen Huang",
    founded: "1993",
    founders: "Jensen Huang; Chris Malachowsky; Curtis Priem",
    role: "AI GPU、GPU 系统、InfiniBand/Ethernet 网络",
    source: "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000023/nvda-20250126.htm",
    confidence: "official/seed",
    summary: "AI 加速器生态中心，连接 TSMC 先进制造、HBM、服务器 ODM、云厂商和高速网络。"
  },
  amd: {
    name: "AMD",
    country: "US",
    city: "Santa Clara",
    address: "2485 Augustine Drive, Santa Clara, CA, US",
    lat: 37.382,
    lon: -121.971,
    ceo: "Lisa Su",
    founded: "1969",
    founders: "Jerry Sanders and co-founders",
    role: "GPU、CPU、FPGA/DPU",
    source: "https://www.amd.com/en/corporate/leadership/lisa-su.html",
    confidence: "official/seed",
    summary: "通过 EPYC、Instinct、Xilinx 和 Pensando 组合进入 AI 训练、推理和数据中心网络。"
  },
  broadcom: {
    name: "Broadcom",
    country: "US",
    city: "Palo Alto",
    address: "3421 Hillview Ave, Palo Alto, CA, US",
    lat: 37.405,
    lon: -122.148,
    ceo: "Hock Tan",
    founded: "Broadcom/Avago lineage",
    founders: "Complex predecessor chain",
    role: "定制 AI ASIC、Ethernet switch、SerDes",
    source: "https://www.broadcom.com/",
    confidence: "seed",
    summary: "云厂商定制 ASIC 与高速网络芯片的关键供应商，横跨计算和互连。"
  },
  tesla: {
    name: "Tesla",
    country: "US",
    city: "Austin",
    address: "1 Tesla Road, Austin, TX, US",
    lat: 30.222,
    lon: -97.617,
    ceo: "Elon Musk",
    founded: "2003",
    founders: "Martin Eberhard; Marc Tarpenning; others",
    role: "Dojo / AI training infrastructure",
    source: "https://ir.tesla.com/",
    confidence: "seed",
    summary: "通过 Dojo 和自动驾驶训练需求进入自研 AI 训练硬件生态。"
  },
  intel: {
    name: "Intel",
    country: "US",
    city: "Santa Clara",
    address: "2200 Mission College Blvd, Santa Clara, CA, US",
    lat: 37.388,
    lon: -121.963,
    ceo: "Lip-Bu Tan",
    founded: "1968",
    founders: "Robert Noyce; Gordon Moore",
    role: "CPU、Foundry、封装、网络",
    source: "https://www.intc.com/",
    confidence: "seed",
    summary: "在 AI 节点主机 CPU、先进封装和 foundry 战略中仍是关键变量。"
  },
  arm: {
    name: "Arm",
    country: "UK",
    city: "Cambridge",
    address: "110 Fulbourn Road, Cambridge, UK",
    lat: 52.191,
    lon: 0.171,
    ceo: "Rene Haas",
    founded: "1990",
    founders: "Acorn; Apple; VLSI joint venture",
    role: "CPU IP、系统 IP",
    source: "https://www.arm.com/company/leadership",
    confidence: "seed",
    summary: "CPU IP 和 Neoverse 生态让 Arm 处在 AI 服务器、DPU 和边缘 AI 芯片设计的基础层。"
  },
  ampere: {
    name: "Ampere Computing",
    country: "US",
    city: "Santa Clara",
    address: "4655 Great America Pkwy, Santa Clara, CA, US",
    lat: 37.398,
    lon: -121.977,
    ceo: "Renee James",
    founded: "2017",
    founders: "Renee James",
    role: "Cloud-native Arm server CPU",
    source: "https://amperecomputing.com/",
    confidence: "seed",
    summary: "以 Arm server CPU 进入云数据中心主机处理器生态。"
  },
  qualcomm: {
    name: "Qualcomm",
    country: "US",
    city: "San Diego",
    address: "5775 Morehouse Drive, San Diego, CA, US",
    lat: 32.894,
    lon: -117.196,
    ceo: "Cristiano Amon",
    founded: "1985",
    founders: "Irwin Jacobs and co-founders",
    role: "Edge AI、CPU/NPU、通信 SoC",
    source: "https://investor.qualcomm.com/",
    confidence: "seed",
    summary: "在边缘 AI、PC AI 和通信 SoC 中有 CPU/NPU 与连接能力。"
  },
  synopsys: {
    name: "Synopsys",
    country: "US",
    city: "Sunnyvale",
    address: "675 Almanor Ave, Sunnyvale, CA, US",
    lat: 37.412,
    lon: -122.008,
    ceo: "Sassine Ghazi",
    founded: "1986",
    founders: "Aart de Geus; David Gregory; Bill Krieger",
    role: "EDA、IP、验证、系统仿真",
    source: "https://www.synopsys.com/",
    confidence: "seed",
    summary: "先进 AI 芯片设计、验证、IP 和多物理场仿真的上游基础设施。"
  },
  cadence: {
    name: "Cadence",
    country: "US",
    city: "San Jose",
    address: "2655 Seely Ave, San Jose, CA, US",
    lat: 37.414,
    lon: -121.947,
    ceo: "Anirudh Devgan",
    founded: "1988",
    founders: "SDA/ECAD merger lineage",
    role: "EDA、IP、系统设计",
    source: "https://www.cadence.com/",
    confidence: "seed",
    summary: "与 Synopsys 一起构成先进芯片设计自动化的核心工具链。"
  },
  ceva: {
    name: "CEVA",
    country: "US",
    city: "Rockville",
    address: "Rockville, MD, US",
    lat: 39.084,
    lon: -77.152,
    ceo: "Amir Panush",
    founded: "1999",
    founders: "DSP Group / Parthus lineage",
    role: "DSP、NPU、无线 IP",
    source: "https://www.ceva-ip.com/",
    confidence: "seed",
    summary: "提供信号处理、AI 和无线连接 IP，更多出现在边缘与通信 AI 芯片。"
  },
  imagination: {
    name: "Imagination Technologies",
    country: "UK",
    city: "Kings Langley",
    address: "Kings Langley, Hertfordshire, UK",
    lat: 51.713,
    lon: -0.451,
    ceo: "Leadership pending verification",
    founded: "1985",
    founders: "VideoLogic lineage",
    role: "GPU/IP",
    source: "https://www.imaginationtech.com/",
    confidence: "seed",
    summary: "GPU 和图形/AI IP 供应商，适合进入 IP 生态层。"
  },
  siemens_eda: {
    name: "Siemens EDA",
    country: "US",
    city: "Wilsonville",
    address: "Wilsonville, OR, US",
    lat: 45.3,
    lon: -122.773,
    ceo: "Siemens EDA leadership",
    founded: "Mentor Graphics lineage",
    founders: "Mentor Graphics founders",
    role: "EDA、验证、IC/PCB 设计",
    source: "https://eda.sw.siemens.com/",
    confidence: "seed",
    summary: "原 Mentor Graphics 体系，是 EDA 三强之一，覆盖芯片、封装和板级设计。"
  },
  ansys: {
    name: "Ansys",
    country: "US",
    city: "Canonsburg",
    address: "2600 Ansys Drive, Canonsburg, PA, US",
    lat: 40.264,
    lon: -80.187,
    ceo: "Ajei Gopal",
    founded: "1970",
    founders: "John Swanson",
    role: "仿真、多物理场、热/电磁",
    source: "https://www.ansys.com/",
    confidence: "seed",
    summary: "系统级仿真对 3DIC、热管理和高速互连越来越关键。"
  },
  silvaco: {
    name: "Silvaco",
    country: "US",
    city: "Santa Clara",
    address: "2811 Mission College Blvd, Santa Clara, CA, US",
    lat: 37.39,
    lon: -121.978,
    ceo: "Babak Taheri",
    founded: "1984",
    founders: "Ivan Pesic",
    role: "TCAD、EDA、IP",
    source: "https://silvaco.com/",
    confidence: "seed",
    summary: "在 TCAD 和器件级仿真中有存在感，是 EDA 长尾生态节点。"
  },
  tsmc: {
    name: "TSMC",
    country: "Taiwan",
    city: "Hsinchu",
    address: "No. 8, Li-Hsin Rd. 6, Hsinchu Science Park, Hsinchu, Taiwan",
    lat: 24.781,
    lon: 121.005,
    ceo: "C.C. Wei",
    founded: "1987",
    founders: "Morris Chang",
    role: "先进逻辑代工、CoWoS/3DFabric",
    source: "https://www.tsmc.com/english/aboutTSMC/company_profile",
    confidence: "official/seed",
    summary: "先进制程和先进封装的中心节点，连接设计公司、HBM、设备、材料与台系制造生态。"
  },
  samsung: {
    name: "Samsung Electronics",
    country: "South Korea",
    city: "Suwon",
    address: "129 Samsung-ro, Yeongtong-gu, Suwon, South Korea",
    lat: 37.257,
    lon: 127.053,
    ceo: "Executive roles pending latest split",
    founded: "1969",
    founders: "Samsung Group lineage",
    role: "HBM/DRAM/NAND、Foundry、先进封装",
    source: "https://www.samsung.com/global/ir/",
    confidence: "seed",
    summary: "同时覆盖存储、foundry 和封装，是少数可横跨 AI 半导体多层的综合巨头。"
  },
  globalfoundries: {
    name: "GlobalFoundries",
    country: "US",
    city: "Malta",
    address: "400 Stone Break Road Extension, Malta, NY, US",
    lat: 42.971,
    lon: -73.789,
    ceo: "Tim Breen",
    founded: "2009",
    founders: "AMD manufacturing spinoff / ATIC",
    role: "Specialty foundry",
    source: "https://gf.com/",
    confidence: "seed",
    summary: "非最先进节点但在 RF、汽车、工业和成熟/特色工艺中重要。"
  },
  smic: {
    name: "SMIC",
    country: "China",
    city: "Shanghai",
    address: "18 Zhangjiang Road, Pudong New Area, Shanghai, China",
    lat: 31.204,
    lon: 121.607,
    ceo: "Zhao Haijun",
    founded: "2000",
    founders: "Richard Chang",
    role: "中国大陆晶圆代工",
    source: "https://www.smics.com/",
    confidence: "seed",
    summary: "中国大陆 foundry 核心节点，受设备和出口管制约束影响明显。"
  },
  sk_hynix: {
    name: "SK hynix",
    country: "South Korea",
    city: "Icheon",
    address: "2091 Gyeongchung-daero, Icheon, South Korea",
    lat: 37.279,
    lon: 127.442,
    ceo: "Kwak Noh-Jung",
    founded: "1983 lineage",
    founders: "Hyundai Electronics lineage",
    role: "HBM、DRAM、NAND",
    source: "https://www.skhynix.com/",
    confidence: "seed",
    summary: "HBM 供应链核心，直接影响 AI 加速器出货能力。"
  },
  micron: {
    name: "Micron",
    country: "US",
    city: "Boise",
    address: "8000 S Federal Way, Boise, ID, US",
    lat: 43.532,
    lon: -116.151,
    ceo: "Sanjay Mehrotra",
    founded: "1978",
    founders: "Ward Parkinson; Joe Parkinson; Dennis Wilson; Doug Pitman",
    role: "HBM、DRAM、NAND、SSD",
    source: "https://www.micron.com/about/our-leadership",
    confidence: "seed",
    summary: "美国存储龙头，正在 HBM 与 AI 数据中心存储中提升权重。"
  },
  cxmt: {
    name: "CXMT",
    country: "China",
    city: "Hefei",
    address: "Hefei, Anhui, China",
    lat: 31.82,
    lon: 117.227,
    ceo: "Zhu Yiming",
    founded: "2016",
    founders: "Zhu Yiming / Hefei industrial ecosystem",
    role: "DRAM",
    source: "https://www.cxmt.com/",
    confidence: "seed",
    summary: "中国大陆 DRAM 代表，适合进入存储国产化与供应链安全网络。"
  },
  nanya: {
    name: "Nanya Technology",
    country: "Taiwan",
    city: "New Taipei",
    address: "Taishan District, New Taipei City, Taiwan",
    lat: 25.055,
    lon: 121.435,
    ceo: "Pei-Ing Lee",
    founded: "1995",
    founders: "Formosa Plastics Group lineage",
    role: "DRAM",
    source: "https://www.nanya.com/",
    confidence: "seed",
    summary: "台湾 DRAM 供应商，是 HBM 之外的存储生态补充节点。"
  },
  kioxia: {
    name: "Kioxia",
    country: "Japan",
    city: "Tokyo",
    address: "Tamachi Station Tower S, Minato-ku, Tokyo, Japan",
    lat: 35.645,
    lon: 139.747,
    ceo: "Nobuo Hayasaka",
    founded: "Toshiba Memory lineage",
    founders: "Toshiba memory business lineage",
    role: "NAND flash",
    source: "https://www.kioxia.com/",
    confidence: "seed",
    summary: "NAND flash 核心厂商，影响 AI 数据管线的存储介质供应。"
  },
  western_digital: {
    name: "Western Digital",
    country: "US",
    city: "San Jose",
    address: "5601 Great Oaks Pkwy, San Jose, CA, US",
    lat: 37.243,
    lon: -121.784,
    ceo: "Leadership pending post-separation verification",
    founded: "1970",
    founders: "Alvin B. Phillips",
    role: "Storage systems / NAND lineage",
    source: "https://investor.wdc.com/",
    confidence: "seed",
    summary: "企业存储和 NAND 生态节点，需按 SanDisk 分拆后的最新结构单独核验。"
  },
  ase: {
    name: "ASE Technology",
    country: "Taiwan",
    city: "Kaohsiung",
    address: "Nanzih Technology Industrial Park, Kaohsiung, Taiwan",
    lat: 22.729,
    lon: 120.307,
    ceo: "Tien Wu",
    founded: "1984",
    founders: "Jason Chang; Richard Chang",
    role: "OSAT、封装、测试",
    source: "https://www.aseglobal.com/",
    confidence: "seed",
    summary: "全球 OSAT 龙头，连接晶圆制造、封装、测试和系统客户。"
  },
  amkor: {
    name: "Amkor",
    country: "US",
    city: "Tempe",
    address: "2045 E Innovation Circle, Tempe, AZ, US",
    lat: 33.341,
    lon: -111.915,
    ceo: "Giel Rutten",
    founded: "1968",
    founders: "James Kim",
    role: "OSAT、先进封装",
    source: "https://amkor.com/",
    confidence: "seed",
    summary: "美国 OSAT 龙头，先进封装与最终测试能力对 AI 芯片供应链有支撑作用。"
  },
  jcet: {
    name: "JCET Group",
    country: "China",
    city: "Jiangyin",
    address: "Jiangyin, Jiangsu, China",
    lat: 31.92,
    lon: 120.285,
    ceo: "Leadership pending verification",
    founded: "1972 lineage",
    founders: "Chinese OSAT lineage",
    role: "OSAT",
    source: "https://www.jcetglobal.com/",
    confidence: "seed",
    summary: "中国大陆封测核心厂商，在成熟封装、SiP 和国际客户网络中重要。"
  },
  pti: {
    name: "Powertech Technology",
    country: "Taiwan",
    city: "Hsinchu",
    address: "Hsinchu, Taiwan",
    lat: 24.813,
    lon: 120.967,
    ceo: "Leadership pending verification",
    founded: "1997",
    founders: "Powertech lineage",
    role: "Memory packaging/test",
    source: "https://www.pti.com.tw/",
    confidence: "seed",
    summary: "存储封装测试重要玩家，和 DRAM/NAND/HBM 生态相邻。"
  },
  tongfu: {
    name: "Tongfu Microelectronics",
    country: "China",
    city: "Nantong",
    address: "Nantong, Jiangsu, China",
    lat: 31.981,
    lon: 120.894,
    ceo: "Leadership pending verification",
    founded: "1997",
    founders: "Tongfu lineage",
    role: "OSAT",
    source: "https://www.tfme.com/",
    confidence: "seed",
    summary: "中国大陆封测公司，与 AMD 等国际客户关系使其在 AI 封测网络中值得追踪。"
  },
  ibiden: {
    name: "Ibiden",
    country: "Japan",
    city: "Ogaki",
    address: "2-1 Kanda-cho, Ogaki, Gifu, Japan",
    lat: 35.359,
    lon: 136.612,
    ceo: "Takeshi Aoki",
    founded: "1912",
    founders: "Ibigawa Electric Power lineage",
    role: "ABF substrate",
    source: "https://www.ibiden.com/",
    confidence: "seed",
    summary: "高端 ABF 封装基板关键供应商，AI 加速器大封装依赖此类基板产能。"
  },
  unimicron: {
    name: "Unimicron",
    country: "Taiwan",
    city: "Taoyuan",
    address: "Taoyuan, Taiwan",
    lat: 24.993,
    lon: 121.301,
    ceo: "Leadership pending verification",
    founded: "1990",
    founders: "UMC ecosystem lineage",
    role: "ABF substrate、PCB",
    source: "https://www.unimicron.com/",
    confidence: "seed",
    summary: "台系高端基板和 PCB 龙头之一，连接 AI 芯片封装和服务器板级系统。"
  },
  shinko: {
    name: "Shinko Electric",
    country: "Japan",
    city: "Nagano",
    address: "Nagano, Japan",
    lat: 36.648,
    lon: 138.195,
    ceo: "Leadership pending verification",
    founded: "1946",
    founders: "Fujitsu ecosystem lineage",
    role: "Package substrate",
    source: "https://www.shinko.co.jp/",
    confidence: "seed",
    summary: "高性能封装基板供应商，是日本封装材料网络的一部分。"
  },
  nan_ya_pcb: {
    name: "Nan Ya PCB",
    country: "Taiwan",
    city: "Taoyuan",
    address: "Taoyuan, Taiwan",
    lat: 24.951,
    lon: 121.227,
    ceo: "Leadership pending verification",
    founded: "1997",
    founders: "Formosa Plastics Group lineage",
    role: "PCB、IC substrate",
    source: "https://www.nanyapcb.com.tw/",
    confidence: "seed",
    summary: "PCB 和封装基板供应商，服务高性能计算与服务器硬件链条。"
  },
  ats: {
    name: "AT&S",
    country: "Austria",
    city: "Leoben",
    address: "Fabriksgasse 13, Leoben, Austria",
    lat: 47.382,
    lon: 15.094,
    ceo: "Leadership pending verification",
    founded: "1987",
    founders: "Austrian PCB lineage",
    role: "IC substrate、PCB",
    source: "https://ats.net/",
    confidence: "seed",
    summary: "欧洲高端 PCB/基板供应商，在异构封装和服务器板级生态中可作为非亚洲节点。"
  },
  toppan: {
    name: "Toppan Photomask",
    country: "US/Japan",
    city: "Round Rock",
    address: "Round Rock, TX, US",
    lat: 30.508,
    lon: -97.679,
    ceo: "Leadership pending verification",
    founded: "Toppan lineage",
    founders: "Toppan lineage",
    role: "Photomask",
    source: "https://www.photomask.com/",
    confidence: "seed",
    summary: "光罩供应商，先进制程量产前置环节之一。"
  },
  dnp: {
    name: "Dai Nippon Printing",
    country: "Japan",
    city: "Tokyo",
    address: "Ichigaya, Shinjuku-ku, Tokyo, Japan",
    lat: 35.694,
    lon: 139.735,
    ceo: "Yoshinari Kitajima",
    founded: "1876",
    founders: "Japanese printing lineage",
    role: "Photomask、materials",
    source: "https://www.global.dnp/",
    confidence: "seed",
    summary: "日本光罩和电子材料供应商，位于先进制造材料网络上游。"
  },
  photronics: {
    name: "Photronics",
    country: "US",
    city: "Brookfield",
    address: "15 Secor Road, Brookfield, CT, US",
    lat: 41.483,
    lon: -73.409,
    ceo: "Frank Lee",
    founded: "1969",
    founders: "Photronics lineage",
    role: "Photomask",
    source: "https://www.photronics.com/",
    confidence: "seed",
    summary: "美国光罩供应商，覆盖 IC 和显示相关光罩。"
  },
  hoya: {
    name: "HOYA",
    country: "Japan",
    city: "Tokyo",
    address: "Shinjuku, Tokyo, Japan",
    lat: 35.69,
    lon: 139.7,
    ceo: "Eiichiro Ikeda",
    founded: "1941",
    founders: "Japanese optical glass lineage",
    role: "Mask blanks、optics materials",
    source: "https://www.hoya.com/",
    confidence: "seed",
    summary: "光学材料和 mask blank 供应商，是光罩上游材料节点。"
  },
  sk_electronics: {
    name: "SK-Electronics",
    country: "Japan",
    city: "Kyoto",
    address: "Kyoto, Japan",
    lat: 35.011,
    lon: 135.768,
    ceo: "Leadership pending verification",
    founded: "1980s lineage",
    founders: "SK-Electronics lineage",
    role: "Photomask",
    source: "https://www.sk-el.co.jp/",
    confidence: "seed",
    summary: "日本光罩公司，适合补足 photomask 长尾供应网络。"
  },
  shin_etsu_handotai: {
    name: "Shin-Etsu Handotai",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.676,
    lon: 139.65,
    ceo: "Leadership pending verification",
    founded: "Shin-Etsu Chemical lineage",
    founders: "Shin-Etsu Chemical lineage",
    role: "Silicon wafer",
    source: "https://www.shinetsu.co.jp/en/",
    confidence: "seed",
    summary: "300mm 晶圆材料核心供应商，先进逻辑和存储都依赖高品质硅片。"
  },
  sumco: {
    name: "SUMCO",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.681,
    lon: 139.764,
    ceo: "Leadership pending verification",
    founded: "1999",
    founders: "Mitsubishi/Sumitomo silicon lineage",
    role: "Silicon wafer",
    source: "https://www.sumcosi.com/",
    confidence: "seed",
    summary: "全球硅片龙头之一，处于晶圆制造材料底座。"
  },
  globalwafers: {
    name: "GlobalWafers",
    country: "Taiwan",
    city: "Hsinchu",
    address: "Hsinchu, Taiwan",
    lat: 24.807,
    lon: 120.968,
    ceo: "Doris Hsu",
    founded: "2011",
    founders: "Sino-American Silicon Products lineage",
    role: "Silicon wafer",
    source: "https://www.sas-globalwafers.com/",
    confidence: "seed",
    summary: "台湾硅片供应商，连接台湾制造集群和全球晶圆厂。"
  },
  siltronic: {
    name: "Siltronic",
    country: "Germany",
    city: "Munich",
    address: "Munich, Germany",
    lat: 48.135,
    lon: 11.582,
    ceo: "Michael Heckmeier",
    founded: "Wacker Chemie lineage",
    founders: "Wacker silicon lineage",
    role: "Silicon wafer",
    source: "https://www.siltronic.com/",
    confidence: "seed",
    summary: "欧洲硅片供应商，提供全球半导体制造材料多元化节点。"
  },
  sk_siltron: {
    name: "SK siltron",
    country: "South Korea",
    city: "Gumi",
    address: "Gumi, South Korea",
    lat: 36.119,
    lon: 128.344,
    ceo: "Leadership pending verification",
    founded: "1983 lineage",
    founders: "LG/SK lineage",
    role: "Silicon wafer",
    source: "https://www.sksiltron.com/",
    confidence: "seed",
    summary: "韩国硅片供应商，服务本土存储和逻辑制造生态。"
  },
  jsr: {
    name: "JSR",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.671,
    lon: 139.761,
    ceo: "Eric Johnson",
    founded: "1957",
    founders: "Japan Synthetic Rubber lineage",
    role: "Photoresist、materials",
    source: "https://www.jsr.co.jp/",
    confidence: "seed",
    summary: "先进光刻胶与电子材料核心供应商之一。"
  },
  tok: {
    name: "Tokyo Ohka Kogyo",
    country: "Japan",
    city: "Kawasaki",
    address: "Kawasaki, Kanagawa, Japan",
    lat: 35.53,
    lon: 139.703,
    ceo: "Leadership pending verification",
    founded: "1940",
    founders: "TOK lineage",
    role: "Photoresist、developer",
    source: "https://www.tok.co.jp/eng/",
    confidence: "seed",
    summary: "光刻胶和显影材料重要供应商。"
  },
  shin_etsu_chemical: {
    name: "Shin-Etsu Chemical",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.669,
    lon: 139.761,
    ceo: "Leadership pending verification",
    founded: "1926",
    founders: "Shin-Etsu lineage",
    role: "Photoresist、silicon materials",
    source: "https://www.shinetsu.co.jp/en/",
    confidence: "seed",
    summary: "横跨硅片、光刻胶和电子材料，是日本半导体材料网络核心节点。"
  },
  merck: {
    name: "Merck KGaA",
    country: "Germany",
    city: "Darmstadt",
    address: "Frankfurter Str. 250, Darmstadt, Germany",
    lat: 49.872,
    lon: 8.651,
    ceo: "Belen Garijo",
    founded: "1668",
    founders: "Merck family lineage",
    role: "Electronic materials",
    source: "https://www.merckgroup.com/",
    confidence: "seed",
    summary: "电子材料和特种化学品供应商，连接欧洲材料与全球晶圆制造。"
  },
  entegris: {
    name: "Entegris",
    country: "US",
    city: "Billerica",
    address: "129 Concord Road, Billerica, MA, US",
    lat: 42.559,
    lon: -71.268,
    ceo: "Bertrand Loy",
    founded: "1966 lineage",
    founders: "Fluoroware / materials handling lineage",
    role: "Chemicals、filtration、materials handling",
    source: "https://www.entegris.com/",
    confidence: "seed",
    summary: "先进制程对污染控制、过滤、湿化学和材料处理的需求使 Entegris 成为关键节点。"
  },
  linde: {
    name: "Linde",
    country: "UK/Ireland",
    city: "Woking",
    address: "Woking, Surrey, UK",
    lat: 51.319,
    lon: -0.559,
    ceo: "Sanjiv Lamba",
    founded: "1879 lineage",
    founders: "Carl von Linde lineage",
    role: "Industrial and specialty gases",
    source: "https://www.linde.com/",
    confidence: "seed",
    summary: "高纯气体和现场供气能力影响晶圆厂连续生产。"
  },
  air_liquide: {
    name: "Air Liquide",
    country: "France",
    city: "Paris",
    address: "75 Quai d'Orsay, Paris, France",
    lat: 48.862,
    lon: 2.307,
    ceo: "Francois Jackow",
    founded: "1902",
    founders: "Georges Claude; Paul Delorme",
    role: "Industrial and specialty gases",
    source: "https://www.airliquide.com/",
    confidence: "seed",
    summary: "服务全球晶圆厂的气体供应与现场系统，是欧洲化学/气体网络核心。"
  },
  air_products: {
    name: "Air Products",
    country: "US",
    city: "Allentown",
    address: "1940 Air Products Blvd, Allentown, PA, US",
    lat: 40.603,
    lon: -75.494,
    ceo: "Leadership pending verification",
    founded: "1940",
    founders: "Leonard P. Pool",
    role: "Industrial gases",
    source: "https://www.airproducts.com/",
    confidence: "seed",
    summary: "工业气体供应商，半导体工厂用气稳定性是供应链韧性的基础。"
  },
  nippon_sanso: {
    name: "Nippon Sanso",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.688,
    lon: 139.765,
    ceo: "Leadership pending verification",
    founded: "1910 lineage",
    founders: "Nippon Sanso lineage",
    role: "Industrial gases",
    source: "https://www.nipponsanso-hd.co.jp/en/",
    confidence: "seed",
    summary: "日本气体供应商，服务本土材料、存储和制造生态。"
  },
  sk_materials: {
    name: "SK Materials",
    country: "South Korea",
    city: "Yeongju",
    address: "Yeongju, South Korea",
    lat: 36.805,
    lon: 128.624,
    ceo: "Leadership pending verification",
    founded: "1982 lineage",
    founders: "SK materials lineage",
    role: "Specialty gases/materials",
    source: "https://www.sk-materials.com/",
    confidence: "seed",
    summary: "韩国特种气体和材料节点，支撑 SK/Samsung 等本土制造生态。"
  },
  asml: {
    name: "ASML",
    country: "Netherlands",
    city: "Veldhoven",
    address: "De Run 6501, Veldhoven, Netherlands",
    lat: 51.419,
    lon: 5.403,
    ceo: "Christophe Fouquet",
    founded: "1984",
    founders: "Philips and ASM International JV lineage",
    role: "EUV/DUV lithography",
    source: "https://www.asml.com/en/investors/annual-report/2025",
    confidence: "official/seed",
    summary: "EUV 光刻的关键瓶颈，先进逻辑和先进存储扩产都与其设备供给相关。"
  },
  nikon: {
    name: "Nikon",
    country: "Japan",
    city: "Tokyo",
    address: "Shinagawa, Tokyo, Japan",
    lat: 35.609,
    lon: 139.73,
    ceo: "Leadership pending verification",
    founded: "1917",
    founders: "Optical industry lineage",
    role: "DUV lithography、optics",
    source: "https://www.nikon.com/company/",
    confidence: "seed",
    summary: "在 DUV 和成熟制程光刻中仍是重要设备玩家。"
  },
  canon: {
    name: "Canon",
    country: "Japan",
    city: "Tokyo",
    address: "Ota-ku, Tokyo, Japan",
    lat: 35.561,
    lon: 139.716,
    ceo: "Fujio Mitarai",
    founded: "1937",
    founders: "Precision Optical Instruments Laboratory lineage",
    role: "Lithography、nanoimprint",
    source: "https://global.canon/en/",
    confidence: "seed",
    summary: "光刻和纳米压印路线的日本设备节点。"
  },
  smee: {
    name: "SMEE",
    country: "China",
    city: "Shanghai",
    address: "Shanghai, China",
    lat: 31.231,
    lon: 121.474,
    ceo: "Leadership pending verification",
    founded: "2002",
    founders: "Chinese equipment ecosystem",
    role: "Lithography equipment",
    source: "https://www.smee.com.cn/",
    confidence: "seed",
    summary: "中国大陆光刻设备代表，适合做国产设备网络节点。"
  },
  suss: {
    name: "SUSS MicroTec",
    country: "Germany",
    city: "Garching",
    address: "Garching, Germany",
    lat: 48.249,
    lon: 11.653,
    ceo: "Burkhardt Frick",
    founded: "1949",
    founders: "Karl Suss lineage",
    role: "Lithography, bonding, advanced packaging equipment",
    source: "https://www.suss.com/",
    confidence: "seed",
    summary: "在先进封装相关曝光、键合和微纳加工设备中重要。"
  },
  applied_materials: {
    name: "Applied Materials",
    country: "US",
    city: "Santa Clara",
    address: "3050 Bowers Ave, Santa Clara, CA, US",
    lat: 37.377,
    lon: -121.982,
    ceo: "Gary Dickerson",
    founded: "1967",
    founders: "Michael A. McNeilly and others",
    role: "Deposition、materials engineering、process tools",
    source: "https://www.appliedmaterials.com/",
    confidence: "seed",
    summary: "沉积、材料工程、刻蚀和过程设备的核心供应商，覆盖先进逻辑和存储。"
  },
  lam_research: {
    name: "Lam Research",
    country: "US",
    city: "Fremont",
    address: "4650 Cushing Parkway, Fremont, CA, US",
    lat: 37.489,
    lon: -121.945,
    ceo: "Tim Archer",
    founded: "1980",
    founders: "David K. Lam",
    role: "Etch、deposition、clean",
    source: "https://www.lamresearch.com/",
    confidence: "seed",
    summary: "刻蚀和沉积设备关键供应商，先进节点和存储堆叠都依赖其工艺能力。"
  },
  tokyo_electron: {
    name: "Tokyo Electron",
    country: "Japan",
    city: "Tokyo",
    address: "Akasaka, Tokyo, Japan",
    lat: 35.671,
    lon: 139.738,
    ceo: "Toshiki Kawai",
    founded: "1963",
    founders: "Tokyo Electron lineage",
    role: "Process equipment",
    source: "https://www.tel.com/",
    confidence: "seed",
    summary: "日本半导体设备龙头，覆盖涂胶显影、刻蚀、沉积、清洗等多个工艺。"
  },
  asm_international: {
    name: "ASM International",
    country: "Netherlands",
    city: "Almere",
    address: "Almere, Netherlands",
    lat: 52.35,
    lon: 5.264,
    ceo: "Benjamin Loh",
    founded: "1968",
    founders: "Arthur del Prado",
    role: "ALD/epitaxy/deposition",
    source: "https://www.asm.com/",
    confidence: "seed",
    summary: "ALD 等沉积工艺强项明显，是先进节点材料工程的重要设备商。"
  },
  kokusai: {
    name: "Kokusai Electric",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.689,
    lon: 139.692,
    ceo: "Leadership pending verification",
    founded: "Hitachi/Kokusai lineage",
    founders: "Kokusai Electric lineage",
    role: "Batch deposition/thermal process",
    source: "https://www.kokusai-electric.com/",
    confidence: "seed",
    summary: "热处理和沉积设备供应商，在存储和逻辑制程中有存在感。"
  },
  kla: {
    name: "KLA",
    country: "US",
    city: "Milpitas",
    address: "One Technology Drive, Milpitas, CA, US",
    lat: 37.413,
    lon: -121.922,
    ceo: "Rick Wallace",
    founded: "KLA/Tencor lineage",
    founders: "Ken Levy; Bob Anderson / Tencor lineage",
    role: "Inspection、metrology、process control",
    source: "https://www.kla.com/",
    confidence: "seed",
    summary: "过程控制与良率爬坡核心供应商，先进制程复杂度越高越关键。"
  },
  hitachi_high_tech: {
    name: "Hitachi High-Tech",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.681,
    lon: 139.767,
    ceo: "Leadership pending verification",
    founded: "Hitachi lineage",
    founders: "Hitachi group lineage",
    role: "CD-SEM、metrology",
    source: "https://www.hitachi-hightech.com/",
    confidence: "seed",
    summary: "CD-SEM 和量测设备节点，服务先进制程控制。"
  },
  onto: {
    name: "Onto Innovation",
    country: "US",
    city: "Wilmington",
    address: "Wilmington, MA, US",
    lat: 42.546,
    lon: -71.174,
    ceo: "Michael Plisinski",
    founded: "Rudolph / Nanometrics merger lineage",
    founders: "Rudolph Technologies and Nanometrics lineage",
    role: "Metrology、inspection",
    source: "https://ontoinnovation.com/",
    confidence: "seed",
    summary: "量测和检测供应商，尤其在先进封装与特殊工艺中值得跟踪。"
  },
  nova: {
    name: "Nova",
    country: "Israel",
    city: "Rehovot",
    address: "Rehovot, Israel",
    lat: 31.895,
    lon: 34.811,
    ceo: "Gaby Waisman",
    founded: "1993",
    founders: "Nova lineage",
    role: "Process control metrology",
    source: "https://www.novami.com/",
    confidence: "seed",
    summary: "以过程控制量测进入先进制造设备网络。"
  },
  advantest: {
    name: "Advantest",
    country: "Japan",
    city: "Tokyo",
    address: "Tokyo, Japan",
    lat: 35.684,
    lon: 139.763,
    ceo: "Yoshiaki Yoshida",
    founded: "1954",
    founders: "Takeda Riken lineage",
    role: "ATE、memory/SoC testing",
    source: "https://www.advantest.com/",
    confidence: "seed",
    summary: "AI 芯片和 HBM 测试复杂度上升，使 ATE 供应商更关键。"
  },
  teradyne: {
    name: "Teradyne",
    country: "US",
    city: "North Reading",
    address: "North Reading, MA, US",
    lat: 42.575,
    lon: -71.079,
    ceo: "Greg Smith",
    founded: "1960",
    founders: "Alex d'Arbeloff; Nick DeWolf",
    role: "ATE、SoC testing",
    source: "https://www.teradyne.com/",
    confidence: "seed",
    summary: "SoC 自动化测试设备核心供应商。"
  },
  formfactor: {
    name: "FormFactor",
    country: "US",
    city: "Livermore",
    address: "Livermore, CA, US",
    lat: 37.681,
    lon: -121.768,
    ceo: "Mike Slessor",
    founded: "1993",
    founders: "FormFactor lineage",
    role: "Probe cards",
    source: "https://www.formfactor.com/",
    confidence: "seed",
    summary: "探针卡和晶圆级测试硬件对大 die 与 HBM 封装测试很重要。"
  },
  cohu: {
    name: "Cohu",
    country: "US",
    city: "Poway",
    address: "Poway, CA, US",
    lat: 32.962,
    lon: -117.035,
    ceo: "Luis Muller",
    founded: "1957",
    founders: "Cohu lineage",
    role: "Test handlers、ATE",
    source: "https://www.cohu.com/",
    confidence: "seed",
    summary: "测试处理、接口和设备供应商，是封测自动化链条的一部分。"
  },
  chroma: {
    name: "Chroma ATE",
    country: "Taiwan",
    city: "Taoyuan",
    address: "Taoyuan, Taiwan",
    lat: 24.989,
    lon: 121.315,
    ceo: "Leadership pending verification",
    founded: "1984",
    founders: "Chroma lineage",
    role: "ATE、power testing",
    source: "https://www.chromaate.com/",
    confidence: "seed",
    summary: "台湾自动化测试设备公司，在电源、半导体和系统测试中有应用。"
  },
  marvell: {
    name: "Marvell",
    country: "US",
    city: "Santa Clara",
    address: "1000 N West Street, Wilmington, DE / Santa Clara, CA operations",
    lat: 37.389,
    lon: -121.982,
    ceo: "Matt Murphy",
    founded: "1995",
    founders: "Sehat Sutardja; Weili Dai; Pantas Sutardja",
    role: "Networking、custom silicon、DPU",
    source: "https://www.marvell.com/",
    confidence: "seed",
    summary: "网络、存储和定制硅片能力使其成为 AI 数据中心互连网络的重要玩家。"
  },
  cisco: {
    name: "Cisco",
    country: "US",
    city: "San Jose",
    address: "170 West Tasman Dr, San Jose, CA, US",
    lat: 37.409,
    lon: -121.954,
    ceo: "Chuck Robbins",
    founded: "1984",
    founders: "Leonard Bosack; Sandy Lerner",
    role: "Networking systems / silicon lineage",
    source: "https://investor.cisco.com/",
    confidence: "seed",
    summary: "网络系统、Silicon One 和数据中心网络能力使其进入 AI 集群互连生态。"
  },
  coherent: {
    name: "Coherent",
    country: "US",
    city: "Saxonburg",
    address: "375 Saxonburg Blvd, Saxonburg, PA, US",
    lat: 40.753,
    lon: -79.811,
    ceo: "Jim Anderson",
    founded: "II-VI / Coherent lineage",
    founders: "Carl Johnson / Coherent lineage",
    role: "Lasers、optics、transceivers",
    source: "https://www.coherent.com/",
    confidence: "seed",
    summary: "光器件、激光和材料能力使其成为 800G/1.6T AI 网络光互连供应商。"
  },
  lumentum: {
    name: "Lumentum",
    country: "US",
    city: "San Jose",
    address: "1001 Ridder Park Drive, San Jose, CA, US",
    lat: 37.38,
    lon: -121.91,
    ceo: "Alan Lowe",
    founded: "JDSU spinoff",
    founders: "JDSU lineage",
    role: "Optical components、lasers",
    source: "https://www.lumentum.com/",
    confidence: "seed",
    summary: "光通信器件和激光供应商，受益于 AI 数据中心光模块需求。"
  },
  innolight: {
    name: "Innolight",
    country: "China",
    city: "Suzhou",
    address: "Suzhou, Jiangsu, China",
    lat: 31.299,
    lon: 120.585,
    ceo: "Leadership pending verification",
    founded: "2008",
    founders: "Innolight lineage",
    role: "Optical transceivers",
    source: "https://www.innolight.com/",
    confidence: "seed",
    summary: "高速光模块重要供应商，处于 AI 集群数据中心网络扩容链条。"
  },
  ttm: {
    name: "TTM Technologies",
    country: "US",
    city: "Santa Ana",
    address: "Santa Ana, CA, US",
    lat: 33.745,
    lon: -117.867,
    ceo: "Thomas Edman",
    founded: "1998",
    founders: "PCB industry merger lineage",
    role: "High-speed PCB",
    source: "https://www.ttm.com/",
    confidence: "seed",
    summary: "高速 PCB 与背板能力服务 AI 服务器和网络设备。"
  },
  amphenol: {
    name: "Amphenol",
    country: "US",
    city: "Wallingford",
    address: "Wallingford, CT, US",
    lat: 41.457,
    lon: -72.823,
    ceo: "R. Adam Norwitt",
    founded: "1932",
    founders: "Arthur J. Schmitt",
    role: "Connectors、cables",
    source: "https://www.amphenol.com/",
    confidence: "seed",
    summary: "高速连接器和线缆供应商，AI 服务器与网络设备信号完整性依赖此类部件。"
  },
  molex: {
    name: "Molex",
    country: "US",
    city: "Lisle",
    address: "Lisle, IL, US",
    lat: 41.801,
    lon: -88.074,
    ceo: "Joe Nelligan",
    founded: "1938",
    founders: "Frederick Krehbiel",
    role: "Connectors、cables",
    source: "https://www.molex.com/",
    confidence: "seed",
    summary: "连接器、线缆和高速互连部件供应商。"
  },
  te_connectivity: {
    name: "TE Connectivity",
    country: "Switzerland",
    city: "Schaffhausen",
    address: "Schaffhausen, Switzerland",
    lat: 47.697,
    lon: 8.634,
    ceo: "Terrence Curtin",
    founded: "Tyco Electronics lineage",
    founders: "Tyco lineage",
    role: "Connectors、sensors",
    source: "https://www.te.com/",
    confidence: "seed",
    summary: "连接器和传感器供应商，覆盖数据中心、工业和汽车应用。"
  },
  mps: {
    name: "Monolithic Power Systems",
    country: "US",
    city: "Kirkland",
    address: "5808 Lake Washington Blvd NE, Kirkland, WA, US",
    lat: 47.66,
    lon: -122.205,
    ceo: "Michael Hsing",
    founded: "1997",
    founders: "Michael Hsing",
    role: "Power management IC",
    source: "https://www.monolithicpower.com/",
    confidence: "seed",
    summary: "高性能电源管理芯片服务 GPU、服务器和数据中心电源系统。"
  },
  infineon: {
    name: "Infineon",
    country: "Germany",
    city: "Neubiberg",
    address: "Am Campeon 1-15, Neubiberg, Germany",
    lat: 48.075,
    lon: 11.664,
    ceo: "Jochen Hanebeck",
    founded: "1999",
    founders: "Siemens semiconductor spinoff",
    role: "Power semiconductors",
    source: "https://www.infineon.com/",
    confidence: "seed",
    summary: "功率半导体、MOSFET/GaN 和电源系统能力让其成为 AI 数据中心电力链条节点。"
  },
  delta: {
    name: "Delta Electronics",
    country: "Taiwan",
    city: "Taipei",
    address: "Taipei, Taiwan",
    lat: 25.047,
    lon: 121.517,
    ceo: "Ping Cheng",
    founded: "1971",
    founders: "Bruce Cheng",
    role: "Power supplies、cooling、data center infrastructure",
    source: "https://www.deltaww.com/",
    confidence: "seed",
    summary: "从电源到散热均有布局，是 AI 数据中心基础设施链条的重要台系节点。"
  },
  texas_instruments: {
    name: "Texas Instruments",
    country: "US",
    city: "Dallas",
    address: "12500 TI Blvd, Dallas, TX, US",
    lat: 32.91,
    lon: -96.752,
    ceo: "Haviv Ilan",
    founded: "1930",
    founders: "Geophysical Service lineage",
    role: "Analog、power management",
    source: "https://investor.ti.com/",
    confidence: "seed",
    summary: "模拟和电源管理芯片广泛进入服务器、电源和工业系统。"
  },
  vicor: {
    name: "Vicor",
    country: "US",
    city: "Andover",
    address: "Andover, MA, US",
    lat: 42.658,
    lon: -71.137,
    ceo: "Patrizio Vinciarelli",
    founded: "1981",
    founders: "Patrizio Vinciarelli",
    role: "High-density power modules",
    source: "https://www.vicorpower.com/",
    confidence: "seed",
    summary: "高密度电源模块在 GPU 和高功耗服务器中具有生态价值。"
  },
  vertiv: {
    name: "Vertiv",
    country: "US",
    city: "Westerville",
    address: "Westerville, OH, US",
    lat: 40.126,
    lon: -82.929,
    ceo: "Giordano Albertazzi",
    founded: "Emerson Network Power spinoff",
    founders: "Emerson lineage",
    role: "Data center power and thermal infrastructure",
    source: "https://www.vertiv.com/",
    confidence: "seed",
    summary: "AI 机柜功耗提升推动液冷、电源和机房基础设施需求，Vertiv 是核心供应商之一。"
  },
  schneider: {
    name: "Schneider Electric",
    country: "France",
    city: "Rueil-Malmaison",
    address: "Rueil-Malmaison, France",
    lat: 48.877,
    lon: 2.181,
    ceo: "Olivier Blum",
    founded: "1836",
    founders: "Schneider brothers lineage",
    role: "Data center electrical and cooling infrastructure",
    source: "https://www.se.com/",
    confidence: "seed",
    summary: "电力分配、机房基础设施和能源管理能力使其成为 AI 数据中心扩容节点。"
  },
  eaton: {
    name: "Eaton",
    country: "Ireland/US",
    city: "Dublin",
    address: "Dublin, Ireland",
    lat: 53.349,
    lon: -6.26,
    ceo: "Craig Arnold",
    founded: "1911",
    founders: "Joseph Eaton; Viggo Torbensen",
    role: "Power management",
    source: "https://www.eaton.com/",
    confidence: "seed",
    summary: "电力管理和 UPS/配电系统连接半导体需求与数据中心建设。"
  },
  nvent: {
    name: "nVent",
    country: "UK/US",
    city: "St. Louis Park",
    address: "St. Louis Park, MN, US",
    lat: 44.948,
    lon: -93.348,
    ceo: "Beth Wozniak",
    founded: "Pentair spinoff",
    founders: "Pentair lineage",
    role: "Electrical enclosures、thermal management",
    source: "https://www.nvent.com/",
    confidence: "seed",
    summary: "电气外壳和热管理组件服务数据中心与工业电力系统。"
  },
  pci_sig: {
    name: "PCI-SIG",
    country: "US",
    city: "Beaverton",
    address: "Beaverton, OR, US",
    lat: 45.487,
    lon: -122.803,
    ceo: "Standards organization",
    founded: "1992",
    founders: "Industry consortium",
    role: "PCIe standards",
    source: "https://pcisig.com/",
    confidence: "seed",
    summary: "PCIe 标准定义服务器内部高速互连基础。"
  },
  cxl: {
    name: "CXL Consortium",
    country: "US",
    city: "Beaverton",
    address: "Beaverton, OR, US",
    lat: 45.49,
    lon: -122.806,
    ceo: "Standards organization",
    founded: "2019",
    founders: "Industry consortium",
    role: "CXL standards",
    source: "https://www.computeexpresslink.org/",
    confidence: "seed",
    summary: "CXL 影响 CPU、内存扩展、加速器和数据中心架构。"
  },
  ucie: {
    name: "UCIe Consortium",
    country: "US",
    city: "Beaverton",
    address: "Beaverton, OR, US",
    lat: 45.494,
    lon: -122.798,
    ceo: "Standards organization",
    founded: "2022",
    founders: "Industry consortium",
    role: "Chiplet interconnect standards",
    source: "https://uciexpress.org/",
    confidence: "seed",
    summary: "UCIe 决定 chiplet 互操作生态，是异构集成网络的制度节点。"
  },
  ocp: {
    name: "Open Compute Project",
    country: "US",
    city: "Austin",
    address: "Austin, TX, US",
    lat: 30.267,
    lon: -97.743,
    ceo: "Standards/community organization",
    founded: "2011",
    founders: "Facebook / industry community lineage",
    role: "Open data center hardware",
    source: "https://www.opencompute.org/",
    confidence: "seed",
    summary: "OCP 推动开放服务器、机柜、电源和数据中心硬件生态。"
  },
  jedec: {
    name: "JEDEC",
    country: "US",
    city: "Arlington",
    address: "Arlington, VA, US",
    lat: 38.881,
    lon: -77.091,
    ceo: "Standards organization",
    founded: "1958 lineage",
    founders: "EIA / NEMA lineage",
    role: "Memory standards, HBM",
    source: "https://www.jedec.org/",
    confidence: "seed",
    summary: "DRAM、NAND 和 HBM 标准制定者，是 AI 存储生态制度节点。"
  },
};

const layerTabs = [
  ["all", "全部"],
  ["demand", "需求"],
  ["system", "系统"],
  ["design", "设计/IP"],
  ["manufacturing", "制造"],
  ["memory", "存储"],
  ["packaging", "封装"],
  ["materials", "材料"],
  ["equipment", "设备/测试"],
  ["interconnect", "互连"],
  ["infrastructure", "电源/散热"],
  ["ecosystem", "生态"],
];

const layerTabLabelsEn = {
  all: "All",
  demand: "Demand",
  system: "Systems",
  design: "Design/IP",
  manufacturing: "Manufacturing",
  memory: "Memory",
  packaging: "Packaging",
  materials: "Materials",
  equipment: "Equipment/Test",
  interconnect: "Interconnect",
  infrastructure: "Power/Thermal",
  ecosystem: "Ecosystem",
};

const viewTabs = [
  ["package", "3D拆解"],
  ["network", "生态网络"],
  ["localization", "国产替代"],
];

const networkTabs = [
  ["origin", "籍贯网络"],
  ["investment", "投资网络"],
];

const networkLayoutTabs = [
  ["geo", "地理"],
  ["circle", "圆形"],
  ["columns", "分层"],
];

const localizationTabs = [
  ["all", "全部"],
  ["可替代", "可替代"],
  ["部分替代", "部分替代"],
  ["高度依赖", "高度依赖"],
];

const i18n = {
  zh: {
    appTitle: "AI 半导体产业链生态图",
    appSubtitle: "Chipscape Network · v0.2",
    searchPlaceholder: "搜索公司、环节、城市",
    packageView: "芯片平面",
    networkView: "生态网络",
    localizationView: "国产替代",
    scopeSegment: "当前环节",
    scopeAll: "全产业链",
    nextLayer: "下一层器件 / 工艺",
    resetPart: "回到环节",
    thirdLayer: "第三层：材料 / 设备 / 工艺 / 供应商",
    networkKicker: "Founder / Capital Network",
    networkTitle: "创始人籍贯网络与投资网络",
    localizationKicker: "China Substitution Matrix",
    localizationTitle: "国产化替代平行对比",
    all: "全部",
    substitutable: "可替代",
    partial: "部分替代",
    dependent: "高度依赖",
    globalPlayers: "全球关键玩家",
    chinaPlayers: "国内替代玩家",
    address: "地址",
    founded: "创立",
    founders: "创始/来源",
    source: "Source",
    noSegment: "没有匹配的环节",
    noCompany: "当前环节没有匹配公司",
    noLocalization: "没有匹配的国产替代条目",
    moduleOverview: "MODULE OVERVIEW",
    relationshipCount: "条关系",
    emptyRelation: "暂未挂接关系",
    physicalKicker: "真实对应层",
    packageAnchor: "封装/系统锚点",
    sourceLayer: "供应链环节",
    networkPreview: "Network Preview",
    networkSnapshot: "生态网络快照",
    openNetwork: "打开网络图",
    networkLayoutGeo: "地理",
    networkLayoutCircle: "圆形",
    networkLayoutColumns: "分层",
    nodeTypes: {
      place: "地域节点",
      community: "社群节点",
      person: "人物节点",
      company: "公司节点",
      investor: "资本节点",
      target: "标的节点",
    },
  },
  en: {
    appTitle: "AI Semiconductor Value Chain Map",
    appSubtitle: "Chipscape Network · v0.2",
    searchPlaceholder: "Search companies, segments, cities",
    packageView: "Chip Plane",
    networkView: "Networks",
    localizationView: "China Substitution",
    scopeSegment: "Current Segment",
    scopeAll: "Full Chain",
    nextLayer: "Next-Layer Devices / Processes",
    resetPart: "Segment",
    thirdLayer: "Third Layer: Materials / Equipment / Process / Suppliers",
    networkKicker: "Founder / Capital Network",
    networkTitle: "Founder-Origin and Investment Networks",
    localizationKicker: "China Substitution Matrix",
    localizationTitle: "Domestic Substitution Benchmark",
    all: "All",
    substitutable: "Substitutable",
    partial: "Partial",
    dependent: "High Dependence",
    globalPlayers: "Global key players",
    chinaPlayers: "China substitution players",
    address: "Address",
    founded: "Founded",
    founders: "Founder / Origin",
    source: "Source",
    noSegment: "No matching segment",
    noCompany: "No matching company in this segment",
    noLocalization: "No matching substitution item",
    moduleOverview: "MODULE OVERVIEW",
    relationshipCount: "relations",
    emptyRelation: "No relation attached yet",
    physicalKicker: "Physical Anchor",
    packageAnchor: "Package / system anchor",
    sourceLayer: "Supply-chain segment",
    networkPreview: "Network Preview",
    networkSnapshot: "Network Snapshot",
    openNetwork: "Open Network",
    networkLayoutGeo: "Geo",
    networkLayoutCircle: "Circle",
    networkLayoutColumns: "Columns",
    nodeTypes: {
      place: "Place node",
      community: "Community node",
      person: "Person node",
      company: "Company node",
      investor: "Capital node",
      target: "Target node",
    },
  },
};

const statusKey = {
  all: "all",
  可替代: "substitutable",
  部分替代: "partial",
  高度依赖: "dependent",
};

const layerLabelsEn = {
  需求端: "Demand",
  系统: "Systems",
  芯片设计: "Chip Design",
  IP: "IP",
  软件: "Software",
  制造: "Manufacturing",
  存储: "Memory",
  封装: "Packaging",
  封测: "OSAT",
  封装材料: "Package Materials",
  材料: "Materials",
  设备: "Equipment",
  测试: "Test",
  互连: "Interconnect",
  板级: "Board-Level",
  电源: "Power",
  基础设施: "Infrastructure",
  生态: "Ecosystem",
};

const segmentEn = {
  cloud_demand: {
    name: "Cloud and AI Model Training/Inference Demand",
    devices: "AI clusters, training pods, inference pods, custom ASIC programs, AI factories, data-center capex",
  },
  server_system: {
    name: "AI Servers and Systems",
    devices: "HGX/GB systems, OAM modules, motherboards, backplanes, racks, BMC, PCIe/CXL topology",
  },
  ai_accelerator_design: {
    name: "AI Accelerators / GPU / XPU",
    devices: "GPU die, tensor cores, MAC arrays, SRAM, NoC, HBM controller, PCIe/CXL, SerDes",
  },
  cloud_custom_asic: {
    name: "Cloud Custom AI ASICs",
    devices: "TPU, Trainium, Maia, MTIA, inference ASICs, training ASICs, on-chip SRAM, matrix arrays",
  },
  host_cpu: {
    name: "CPU and Host Processors",
    devices: "x86 CPU, Arm Neoverse CPU, chiplet CPU, I/O die, CXL host, memory controllers",
  },
  processor_ip: {
    name: "Processor and Interface IP",
    devices: "Arm CPU IP, RISC-V IP, GPU/NPU IP, PCIe/CXL controller, SerDes, HBM PHY, UCIe PHY",
  },
  eda: {
    name: "EDA and Verification",
    devices: "RTL synthesis, place and route, DRC/LVS, timing closure, power integrity, emulation, 3DIC simulation",
  },
  advanced_logic_foundry: {
    name: "Advanced Logic Foundry",
    devices: "5nm/4nm/3nm/2nm logic, FinFET/GAA, EUV/DUV patterning, BEOL interconnect",
  },
  hbm_memory: {
    name: "HBM / DRAM",
    devices: "HBM3E, HBM4, DRAM die, base logic die, TSV, microbumps, MR-MUF, TC-NCF, DDR5",
  },
  nand_storage: {
    name: "NAND / SSD / Storage Control",
    devices: "NAND flash, enterprise SSD, SSD controller, PCIe/NVMe controller, QLC/TLC NAND",
  },
  advanced_packaging: {
    name: "Advanced Packaging / Heterogeneous Integration",
    devices: "2.5D interposer, CoWoS, SoIC, EMIB, Foveros, I-Cube/X-Cube, fan-out, hybrid bonding",
  },
  osat: {
    name: "OSAT and Package Test",
    devices: "Flip-chip BGA, SiP, wafer bumping, 2.5D assembly, final test, burn-in",
  },
  abf_substrate: {
    name: "ABF / Package Substrates",
    devices: "ABF substrate, BT substrate, build-up film, coreless substrate, copper foil, solder resist",
  },
  photomask: {
    name: "Photomask / Reticle",
    devices: "EUV mask, DUV mask, pellicle, mask blank, OPC/MDP data",
  },
  silicon_wafer: {
    name: "Silicon Wafers",
    devices: "300mm prime wafer, SOI wafer, epi wafer, silicon ingot, polished wafer",
  },
  chemicals_resist: {
    name: "Photoresist / Wet Chemicals / CMP",
    devices: "EUV photoresist, developer, etch chemicals, CMP slurry/pad, cleaning chemicals, precursors",
  },
  specialty_gases: {
    name: "Specialty and Industrial Gases",
    devices: "Neon, argon, nitrogen, hydrogen, fluorine compounds, CVD/etch gases",
  },
  lithography_equipment: {
    name: "Lithography Equipment",
    devices: "EUV scanner, High-NA EUV, DUV immersion, alignment modules, lithography metrology",
  },
  process_equipment: {
    name: "Deposition / Etch / Clean / CMP",
    devices: "CVD, PVD, ALD, plasma etch, atomic-layer etch, clean, CMP, thermal processing",
  },
  metrology_inspection: {
    name: "Metrology / Inspection / Process Control",
    devices: "Wafer inspection, e-beam inspection, CD-SEM, overlay metrology, yield management",
  },
  test_equipment: {
    name: "ATE / Probe / Burn-in",
    devices: "SoC tester, memory tester, probe card, burn-in system, socket, handler",
  },
  networking_silicon: {
    name: "Data-Center Network ASIC / NIC / DPU",
    devices: "Ethernet switch ASIC, InfiniBand switch, SmartNIC/DPU, retimer, redriver, DSP, PHY",
  },
  optical_interconnect: {
    name: "Optical Modules / Silicon Photonics / CPO",
    devices: "800G/1.6T transceiver, DSP, TIA, driver, EML/VCSEL, photodiode, silicon photonics PIC, CPO",
  },
  pcb_connectors: {
    name: "PCB / Connectors / Cables",
    devices: "High-speed PCB, backplane, copper cable, connector, socket, retimer card",
  },
  power_management: {
    name: "Power Management / Power Devices",
    devices: "VRM controller, DrMOS, power stage, MOSFET, GaN, inductor, capacitor, power shelf, UPS",
  },
  cooling_racks: {
    name: "Liquid Cooling and Rack Infrastructure",
    devices: "Cold plate, manifold, CDU, pump, quick disconnect, rear-door heat exchanger, immersion cooling, rack PDU",
  },
  standards_ecosystem: {
    name: "Interconnect and Chiplet Standards",
    devices: "UCIe, PCIe, CXL, Ethernet, Open Compute Project, OpenBMC, JEDEC HBM",
  },
};

const physicalLayers = [
  {
    id: "demand_system",
    number: "0",
    zh: "云需求 / AI 服务器 / 机柜",
    en: "Cloud demand / AI servers / racks",
    anchorZh: "不是芯片内部器件，而是拉动 GPU、HBM、网络和散热的系统级需求。",
    anchorEn: "A system-level demand layer pulling GPU, HBM, networking and thermal capacity.",
    segments: ["cloud_demand", "server_system", "cooling_racks"],
    selectors: [".board-layer"],
    callouts: ["c8"],
  },
  {
    id: "compute_die",
    number: "1",
    zh: "GPU / XPU 计算裸片",
    en: "GPU / XPU compute die",
    anchorZh: "对应 AI 加速器设计、云 ASIC、CPU、先进逻辑代工与 EDA/IP。",
    anchorEn: "Maps to accelerator design, cloud ASICs, CPUs, advanced logic foundry and EDA/IP.",
    segments: ["ai_accelerator_design", "cloud_custom_asic", "host_cpu", "processor_ip", "eda", "advanced_logic_foundry"],
    selectors: [".gpu-die", ".top-module"],
    callouts: ["c1"],
  },
  {
    id: "memory_stack",
    number: "2",
    zh: "HBM / DRAM / 存储堆栈",
    en: "HBM / DRAM / memory stacks",
    anchorZh: "对应 HBM、DRAM、NAND/SSD 与存储测试封装。",
    anchorEn: "Maps to HBM, DRAM, NAND/SSD and memory package/test.",
    segments: ["hbm_memory", "nand_storage"],
    selectors: [".hbm-stack"],
    callouts: ["c2", "c5"],
  },
  {
    id: "interposer_bumps",
    number: "3",
    zh: "硅中介层 / 微凸点 / TSV",
    en: "Interposer / microbumps / TSV",
    anchorZh: "对应先进封装、2.5D/3D 集成、硅中介层与键合工艺。",
    anchorEn: "Maps to advanced packaging, 2.5D/3D integration, interposer and bonding processes.",
    segments: ["advanced_packaging", "osat"],
    selectors: [".interposer-layer", ".microbump-field"],
    callouts: ["c3", "c4", "c5"],
  },
  {
    id: "substrate_package",
    number: "4",
    zh: "ABF 基板 / BGA / 封测",
    en: "ABF substrate / BGA / OSAT",
    anchorZh: "对应 ABF/BT 基板、封装基板、BGA 焊球、封测与最终测试。",
    anchorEn: "Maps to ABF/BT substrates, package substrate, BGA balls, OSAT and final test.",
    segments: ["abf_substrate", "test_equipment"],
    selectors: [".substrate-layer", ".bga-field"],
    callouts: ["c6", "c7"],
  },
  {
    id: "fab_materials_equipment",
    number: "5",
    zh: "晶圆制造材料 / 设备 / 量检测",
    en: "Fab materials / equipment / inspection",
    anchorZh: "对应硅片、光罩、光刻胶、特气、光刻、刻蚀沉积、量测检测。",
    anchorEn: "Maps to wafers, masks, resists, gases, lithography, deposition/etch and metrology.",
    segments: ["photomask", "silicon_wafer", "chemicals_resist", "specialty_gases", "lithography_equipment", "process_equipment", "metrology_inspection"],
    selectors: [".top-module", ".interposer-layer"],
    callouts: ["c1", "c3"],
  },
  {
    id: "board_network_power",
    number: "6",
    zh: "板级互连 / 光模块 / 电源",
    en: "Board interconnect / optics / power",
    anchorZh: "对应网络 ASIC、光模块、PCB、连接器、电源管理和板级高速通道。",
    anchorEn: "Maps to network silicon, optical modules, PCB, connectors, power and board-level links.",
    segments: ["networking_silicon", "optical_interconnect", "pcb_connectors", "power_management"],
    selectors: [".board-layer"],
    callouts: ["c8"],
  },
  {
    id: "standards",
    number: "7",
    zh: "互连 / Chiplet / 标准生态",
    en: "Interconnect / chiplet standards",
    anchorZh: "对应 UCIe、PCIe、CXL、JEDEC HBM、OCP 等协议与生态组织。",
    anchorEn: "Maps to UCIe, PCIe, CXL, JEDEC HBM, OCP and ecosystem standards.",
    segments: ["standards_ecosystem"],
    selectors: [".top-module", ".interposer-layer", ".board-layer"],
    callouts: ["c8"],
  },
];

const calloutLabels = {
  c1: ["GPU / XPU 核心", "GPU / XPU die"],
  c2: ["HBM 显存堆栈", "HBM memory stacks"],
  c3: ["硅中介层", "Silicon interposer"],
  c4: ["微凸点连接", "Microbumps"],
  c5: ["TSV 垂直通道", "TSV vertical vias"],
  c6: ["封装基板", "Package substrate"],
  c7: ["BGA 焊球", "BGA solder balls"],
  c8: ["板级高速通道", "Board-level high-speed links"],
};

const edgeLegend = {
  origin: ["出生地/籍贯", "Birthplace / origin"],
  career: ["教育/职业路径", "Education / career path"],
  leadership: ["创始/CEO/领导关系", "Founder / CEO / leadership"],
  acquisition: ["并购", "Acquisition"],
  ownership: ["控股/所有权", "Ownership"],
  "state-capital": ["产业资本/国资", "Industrial / state capital"],
  "startup-funding": ["创业融资", "Startup funding"],
};

const networkNodeLabelsEn = {
  taiwan: "Taiwan network",
  mainland: "Mainland China birth / entrepreneurship",
  diaspora: "Chinese / Greater China engineering network",
  silicon_valley: "Silicon Valley / US career network",
  bigfund: "Big Fund / state capital",
  tencent_i: "Tencent / ByteDance etc.",
};

const networkGeoNodes = {
  origin: {
    taiwan: { lon: 121.0, lat: 23.8 },
    mainland: { lon: 121.3, lat: 30.6 },
    diaspora: { lon: -122.1, lat: 37.4 },
    silicon_valley: { lon: -122.05, lat: 37.38 },
    jensen: { lon: 121.56, lat: 25.04 },
    lisa: { lon: 120.2, lat: 23.0 },
    morris: { lon: 121.55, lat: 29.87 },
    weili: { lon: 121.47, lat: 31.23 },
    sanjay: { lon: -121.98, lat: 37.39 },
    nvidia_node: { lon: -121.965, lat: 37.37 },
    amd_node: { lon: -121.971, lat: 37.382 },
    tsmc_node: { lon: 121.005, lat: 24.781 },
    marvell_node: { lon: -121.982, lat: 37.389 },
    micron_node: { lon: -116.151, lat: 43.532 },
  },
  investment: {
    nvidia_i: { lon: -121.965, lat: 37.37 },
    mellanox: { lon: 35.1, lat: 32.65 },
    amd_i: { lon: -121.971, lat: 37.382 },
    xilinx: { lon: -121.95, lat: 37.41 },
    pensando: { lon: -121.9, lat: 37.43 },
    softbank: { lon: 139.76, lat: 35.66 },
    arm_i: { lon: 0.171, lat: 52.191 },
    synopsys_i: { lon: -122.008, lat: 37.412 },
    ansys_i: { lon: -80.187, lat: 40.264 },
    bigfund: { lon: 116.4, lat: 39.9 },
    smic_i: { lon: 121.607, lat: 31.204 },
    empyrean_i: { lon: 116.3, lat: 39.99 },
    piotech_i: { lon: 123.43, lat: 41.8 },
    moore_i: { lon: 116.5, lat: 39.9 },
    tencent_i: { lon: 113.94, lat: 22.55 },
  },
};

const componentSelectorsBySegment = {
  cloud_demand: [".board-layer", ".cooling-module"],
  server_system: [".board-layer", ".cpu-module", ".nic-module", ".vrm-module", ".cooling-module"],
  ai_accelerator_design: [".gpu-die"],
  cloud_custom_asic: [".gpu-die", ".source-eda"],
  host_cpu: [".cpu-module"],
  processor_ip: [".source-eda", ".gpu-die"],
  eda: [".source-eda"],
  advanced_logic_foundry: [".gpu-die", ".source-wafer", ".source-tool"],
  hbm_memory: [".hbm-stack"],
  nand_storage: [".hbm-stack", ".board-layer"],
  advanced_packaging: [".interposer-layer", ".microbump-field", ".bga-field"],
  osat: [".substrate-layer", ".bga-field"],
  abf_substrate: [".substrate-layer"],
  photomask: [".source-tool"],
  silicon_wafer: [".source-wafer"],
  chemicals_resist: [".source-wafer", ".source-tool"],
  specialty_gases: [".source-tool"],
  lithography_equipment: [".source-tool"],
  process_equipment: [".source-tool", ".source-wafer"],
  metrology_inspection: [".source-tool"],
  test_equipment: [".bga-field", ".retimer-module"],
  networking_silicon: [".nic-module"],
  optical_interconnect: [".optical-module"],
  pcb_connectors: [".board-layer", ".retimer-module"],
  power_management: [".vrm-module"],
  cooling_racks: [".cooling-module"],
  standards_ecosystem: [".gpu-die", ".interposer-layer", ".board-layer", ".retimer-module"],
};

const chipComponents = {
  wafer: {
    zh: "晶圆 / 光罩 / 材料",
    en: "Wafer / mask / materials",
    kindZh: "制造输入",
    kindEn: "Fab input",
    segments: ["silicon_wafer", "photomask", "chemicals_resist", "specialty_gases", "advanced_logic_foundry"],
  },
  euv: {
    zh: "光刻 / 刻蚀 / 量测设备",
    en: "Lithography / process tools",
    kindZh: "前道设备",
    kindEn: "Front-end tools",
    segments: ["lithography_equipment", "process_equipment", "metrology_inspection", "photomask", "chemicals_resist"],
  },
  eda: {
    zh: "EDA / IP / 验证",
    en: "EDA / IP / verification",
    kindZh: "设计输入",
    kindEn: "Design input",
    segments: ["eda", "processor_ip", "ai_accelerator_design", "cloud_custom_asic"],
  },
  gpu: {
    zh: "GPU / XPU 计算裸片",
    en: "GPU / XPU compute die",
    kindZh: "计算核心",
    kindEn: "Compute die",
    segments: ["ai_accelerator_design", "cloud_custom_asic", "advanced_logic_foundry", "processor_ip"],
  },
  hbm: {
    zh: "HBM / DRAM 堆栈",
    en: "HBM / DRAM stacks",
    kindZh: "近存储",
    kindEn: "Near memory",
    segments: ["hbm_memory", "nand_storage"],
  },
  interposer: {
    zh: "硅中介层 / 微凸点 / TSV",
    en: "Interposer / microbumps / TSV",
    kindZh: "2.5D 连接",
    kindEn: "2.5D link",
    segments: ["advanced_packaging", "osat", "standards_ecosystem"],
  },
  substrate: {
    zh: "ABF / 封装基板",
    en: "ABF package substrate",
    kindZh: "封装材料",
    kindEn: "Package substrate",
    segments: ["abf_substrate", "advanced_packaging", "osat"],
  },
  bga: {
    zh: "BGA / 封测 / ATE",
    en: "BGA / OSAT / ATE",
    kindZh: "封测出口",
    kindEn: "Package exit",
    segments: ["osat", "test_equipment", "abf_substrate"],
  },
  cpu: {
    zh: "CPU / 主机处理器",
    en: "CPU / host processor",
    kindZh: "主机侧",
    kindEn: "Host side",
    segments: ["host_cpu", "server_system", "cloud_demand"],
  },
  nic: {
    zh: "网络 ASIC / NIC / DPU",
    en: "Network ASIC / NIC / DPU",
    kindZh: "集群互连",
    kindEn: "Cluster fabric",
    segments: ["networking_silicon", "server_system", "standards_ecosystem"],
  },
  optics: {
    zh: "800G/1.6T 光模块",
    en: "800G/1.6T optics",
    kindZh: "光互连",
    kindEn: "Optical link",
    segments: ["optical_interconnect", "networking_silicon", "server_system"],
  },
  vrm: {
    zh: "VRM / 电源管理",
    en: "VRM / power management",
    kindZh: "供电",
    kindEn: "Power",
    segments: ["power_management", "server_system"],
  },
  retimer: {
    zh: "PCB / Retimer / 连接器",
    en: "PCB / retimer / connectors",
    kindZh: "板级高速",
    kindEn: "Board link",
    segments: ["pcb_connectors", "test_equipment", "standards_ecosystem"],
  },
  cooling: {
    zh: "冷板 / 液冷 / 机柜",
    en: "Cold plate / liquid cooling",
    kindZh: "热管理",
    kindEn: "Thermal",
    segments: ["cooling_racks", "server_system", "cloud_demand"],
  },
};

const chipShortLabels = {
  wafer: ["Wafer", "Wafer"],
  euv: ["EUV", "EUV"],
  eda: ["EDA/IP", "EDA/IP"],
  gpu: ["GPU", "GPU"],
  hbm: ["HBM", "HBM"],
  interposer: ["中介层", "Interposer"],
  substrate: ["ABF", "ABF"],
  bga: ["BGA", "BGA"],
  cpu: ["CPU", "CPU"],
  nic: ["NIC/DPU", "NIC/DPU"],
  optics: ["800G", "800G"],
  vrm: ["VRM", "VRM"],
  retimer: ["Retimer", "Retimer"],
  cooling: ["冷板", "Cold plate"],
};

const chipNodeComponents = {
  wafer: "wafer",
  euv: "euv",
  eda: "eda",
  gpu: "gpu",
  "hbm-a": "hbm",
  "hbm-b": "hbm",
  "hbm-c": "hbm",
  "hbm-d": "hbm",
  interposer: "interposer",
  substrate: "substrate",
  bga: "bga",
  cpu: "cpu",
  nic: "nic",
  optics: "optics",
  vrm: "vrm",
  retimer: "retimer",
  cooling: "cooling",
};

const chipNodeFallback = {
  wafer: [92, 76],
  euv: [205, 66],
  eda: [578, 66],
  gpu: [340, 196],
  "hbm-a": [224, 142],
  "hbm-b": [506, 142],
  "hbm-c": [224, 256],
  "hbm-d": [506, 256],
  interposer: [326, 181],
  substrate: [340, 242],
  bga: [340, 374],
  cpu: [88, 224],
  nic: [588, 198],
  optics: [590, 330],
  vrm: [92, 330],
  retimer: [338, 328],
  cooling: [340, 72],
};

const chipSignalLinks = [
  { from: "wafer", to: "euv", labelZh: "材料/图形化", labelEn: "materials / patterning" },
  { from: "euv", to: "gpu", labelZh: "晶圆制造", labelEn: "wafer fab" },
  { from: "eda", to: "gpu", labelZh: "设计签核", labelEn: "design signoff" },
  { from: "gpu", to: "hbm-a", labelZh: "HBM PHY", labelEn: "HBM PHY" },
  { from: "gpu", to: "hbm-b", labelZh: "HBM PHY", labelEn: "HBM PHY" },
  { from: "gpu", to: "hbm-c", labelZh: "HBM PHY", labelEn: "HBM PHY" },
  { from: "gpu", to: "hbm-d", labelZh: "HBM PHY", labelEn: "HBM PHY" },
  { from: "gpu", to: "interposer", labelZh: "die-to-die", labelEn: "die-to-die" },
  { from: "hbm-a", to: "interposer", labelZh: "TSV/微凸点", labelEn: "TSV / microbump" },
  { from: "hbm-d", to: "interposer", labelZh: "TSV/微凸点", labelEn: "TSV / microbump" },
  { from: "interposer", to: "substrate", labelZh: "CoWoS/2.5D", labelEn: "CoWoS / 2.5D" },
  { from: "substrate", to: "bga", labelZh: "封装测试", labelEn: "package test" },
  { from: "bga", to: "retimer", labelZh: "PCB 高速通道", labelEn: "board trace" },
  { from: "cpu", to: "gpu", labelZh: "PCIe/CXL", labelEn: "PCIe / CXL" },
  { from: "gpu", to: "nic", labelZh: "NVLink/Ethernet", labelEn: "NVLink / Ethernet" },
  { from: "nic", to: "optics", labelZh: "800G/1.6T", labelEn: "800G / 1.6T" },
  { from: "vrm", to: "gpu", labelZh: "供电", labelEn: "power" },
  { from: "cooling", to: "gpu", labelZh: "散热", labelEn: "thermal" },
  { from: "retimer", to: "optics", labelZh: "信号完整性", labelEn: "signal integrity" },
];

const worldPolygons = [
  {
    id: "north_america",
    label: ["北美", "North America"],
    center: [-102, 46],
    points: [
      [-168, 71], [-150, 70], [-136, 60], [-130, 52], [-124, 48], [-124, 40],
      [-117, 32], [-107, 29], [-99, 24], [-90, 29], [-84, 25], [-80, 31],
      [-75, 35], [-68, 44], [-58, 49], [-53, 55], [-60, 60], [-75, 62],
      [-92, 70], [-112, 72], [-130, 72], [-150, 74],
    ],
  },
  {
    id: "central_america",
    label: ["中美洲", "Central America"],
    center: [-88, 16],
    points: [[-105, 24], [-94, 18], [-86, 17], [-80, 9], [-77, 8], [-82, 15], [-91, 20]],
  },
  {
    id: "south_america",
    label: ["南美", "South America"],
    center: [-61, -18],
    points: [
      [-81, 12], [-72, 9], [-65, 1], [-58, -6], [-48, -9], [-39, -15],
      [-35, -24], [-43, -34], [-51, -48], [-66, -56], [-74, -45], [-71, -30],
      [-76, -16], [-81, -4],
    ],
  },
  {
    id: "greenland",
    label: ["格陵兰", "Greenland"],
    center: [-42, 72],
    points: [[-73, 78], [-55, 82], [-25, 80], [-18, 72], [-32, 60], [-52, 60], [-66, 68]],
  },
  {
    id: "europe",
    label: ["欧洲", "Europe"],
    center: [13, 52],
    points: [
      [-11, 36], [-9, 43], [-2, 50], [4, 58], [17, 61], [27, 69], [40, 63],
      [34, 52], [29, 44], [20, 41], [13, 36], [2, 40],
    ],
  },
  {
    id: "africa",
    label: ["非洲", "Africa"],
    center: [18, 1],
    points: [
      [-18, 35], [0, 37], [16, 33], [33, 31], [51, 11], [43, -12], [35, -34],
      [18, -35], [5, -28], [-10, -12], [-17, 9],
    ],
  },
  {
    id: "asia",
    label: ["亚洲", "Asia"],
    center: [88, 38],
    points: [
      [31, 69], [62, 72], [95, 71], [130, 68], [165, 64], [179, 55],
      [159, 48], [143, 42], [139, 35], [124, 31], [121, 22], [105, 9],
      [96, 16], [82, 7], [68, 23], [54, 26], [46, 31], [40, 41], [30, 50],
    ],
  },
  {
    id: "india",
    label: ["南亚", "South Asia"],
    center: [78, 20],
    points: [[67, 25], [78, 31], [90, 26], [88, 18], [80, 8], [73, 7], [68, 16]],
  },
  {
    id: "japan_korea",
    label: ["日韩", "Japan / Korea"],
    center: [134, 37],
    points: [[126, 40], [132, 44], [141, 41], [146, 35], [139, 31], [130, 34]],
  },
  {
    id: "southeast_asia",
    label: ["东南亚", "SE Asia"],
    center: [112, 3],
    points: [[96, 15], [108, 12], [116, 5], [123, 2], [130, -6], [120, -10], [106, -4], [99, 7]],
  },
  {
    id: "australia",
    label: ["澳洲", "Australia"],
    center: [134, -25],
    points: [[113, -11], [132, -10], [153, -25], [146, -43], [123, -39], [112, -27]],
  },
  {
    id: "new_zealand",
    label: ["新西兰", "New Zealand"],
    center: [172, -42],
    points: [[166, -35], [178, -38], [176, -47], [168, -46]],
  },
  {
    id: "uk_ireland",
    label: ["英国", "UK"],
    center: [-3, 55],
    points: [[-10, 51], [-6, 58], [2, 57], [2, 50], [-5, 49]],
  },
  {
    id: "taiwan",
    label: ["台湾", "Taiwan"],
    center: [121, 24],
    points: [[120, 26], [122, 25], [122, 22], [120.5, 21.8], [119.8, 23.8]],
  },
  {
    id: "madagascar",
    label: ["马达加斯加", "Madagascar"],
    center: [47, -20],
    points: [[44, -12], [50, -16], [50, -25], [45, -26], [43, -18]],
  },
];

const networkData = {
  origin: {
    title: "公开籍贯/出生地网络",
    titleEn: "Public Origin / Birthplace Network",
    description:
      "只记录公开资料明确写出的出生地、籍贯或成长地，不从姓名、语言或国籍推断。台湾网络、华人工程师网络和硅谷训练网络在 AI 半导体中形成明显交叉。",
    descriptionEn:
      "This view only records publicly stated birthplace, native place or formative geography. It does not infer origin from names, language or nationality. Taiwan, Chinese diaspora engineering and Silicon Valley career networks overlap strongly in AI semiconductors.",
    nodes: [
      { id: "taiwan", label: "台湾网络", type: "place", x: 370, y: 128 },
      { id: "mainland", label: "中国大陆出生/创业", type: "place", x: 370, y: 300 },
      { id: "diaspora", label: "华人/大中华工程师网络", type: "community", x: 640, y: 220 },
      { id: "silicon_valley", label: "硅谷/美国训练", type: "community", x: 865, y: 220 },
      { id: "jensen", label: "Jensen Huang", type: "person", x: 120, y: 96 },
      { id: "lisa", label: "Lisa Su", type: "person", x: 120, y: 176 },
      { id: "morris", label: "Morris Chang", type: "person", x: 120, y: 286 },
      { id: "weili", label: "Weili Dai", type: "person", x: 120, y: 386 },
      { id: "sanjay", label: "Sanjay Mehrotra", type: "person", x: 120, y: 488 },
      { id: "nvidia_node", label: "NVIDIA", type: "company", x: 930, y: 90 },
      { id: "amd_node", label: "AMD", type: "company", x: 930, y: 150 },
      { id: "tsmc_node", label: "TSMC", type: "company", x: 930, y: 306 },
      { id: "marvell_node", label: "Marvell", type: "company", x: 930, y: 386 },
      { id: "micron_node", label: "Micron", type: "company", x: 930, y: 488 },
    ],
    edges: [
      ["jensen", "taiwan", "Taipei", "origin", "Taipei"],
      ["lisa", "taiwan", "Tainan", "origin", "Tainan"],
      ["morris", "mainland", "Ningbo", "origin", "Ningbo"],
      ["weili", "mainland", "Shanghai", "origin", "Shanghai"],
      ["jensen", "diaspora", "公开籍贯/出生地", "origin", "public origin"],
      ["lisa", "diaspora", "公开籍贯/出生地", "origin", "public origin"],
      ["morris", "diaspora", "公开籍贯/出生地", "origin", "public origin"],
      ["weili", "diaspora", "公开籍贯/出生地", "origin", "public origin"],
      ["jensen", "silicon_valley", "美国职业路径", "career", "US career"],
      ["lisa", "silicon_valley", "MIT/美国职业路径", "career", "MIT/US career"],
      ["morris", "silicon_valley", "TI/美国职业路径", "career", "TI/US career"],
      ["sanjay", "silicon_valley", "SanDisk/Micron", "career", "SanDisk/Micron"],
      ["jensen", "nvidia_node", "创始人/CEO", "leadership", "founder/CEO"],
      ["lisa", "amd_node", "CEO", "leadership", "CEO"],
      ["morris", "tsmc_node", "创始人", "leadership", "founder"],
      ["weili", "marvell_node", "创始人", "leadership", "founder"],
      ["sanjay", "micron_node", "CEO", "leadership", "CEO"],
    ],
  },
  investment: {
    title: "投资/并购网络",
    titleEn: "Investment / M&A Network",
    description:
      "把能力补齐型并购、控股关系和中国半导体产业基金/地方资本支持分开看。AI 半导体里的强关系不只股权，供应依赖仍需单独建图。",
    descriptionEn:
      "This view separates capability-building acquisitions, ownership and China state/industrial capital. Equity is only one strong tie in AI semiconductors; supply dependence should be mapped separately.",
    nodes: [
      { id: "nvidia_i", label: "NVIDIA", type: "company", x: 120, y: 100 },
      { id: "mellanox", label: "Mellanox", type: "target", x: 390, y: 100 },
      { id: "amd_i", label: "AMD", type: "company", x: 120, y: 230 },
      { id: "xilinx", label: "Xilinx", type: "target", x: 390, y: 204 },
      { id: "pensando", label: "Pensando", type: "target", x: 390, y: 266 },
      { id: "softbank", label: "SoftBank", type: "investor", x: 120, y: 372 },
      { id: "arm_i", label: "Arm", type: "target", x: 390, y: 372 },
      { id: "synopsys_i", label: "Synopsys", type: "company", x: 620, y: 155 },
      { id: "ansys_i", label: "Ansys", type: "target", x: 900, y: 155 },
      { id: "bigfund", label: "大基金/国资", type: "investor", x: 620, y: 346 },
      { id: "smic_i", label: "SMIC", type: "target", x: 900, y: 286 },
      { id: "empyrean_i", label: "华大九天", type: "target", x: 900, y: 346 },
      { id: "piotech_i", label: "拓荆科技", type: "target", x: 900, y: 406 },
      { id: "moore_i", label: "摩尔线程", type: "target", x: 900, y: 488 },
      { id: "tencent_i", label: "腾讯/字节等", type: "investor", x: 620, y: 488 },
    ],
    edges: [
      ["nvidia_i", "mellanox", "并购", "acquisition", "acquired"],
      ["amd_i", "xilinx", "并购", "acquisition", "acquired"],
      ["amd_i", "pensando", "并购", "acquisition", "acquired"],
      ["softbank", "arm_i", "控股", "ownership", "owns"],
      ["synopsys_i", "ansys_i", "并购", "acquisition", "acquired"],
      ["bigfund", "smic_i", "战略资本", "state-capital", "strategic capital"],
      ["bigfund", "empyrean_i", "国资/产业资本", "state-capital", "state-backed capital"],
      ["bigfund", "piotech_i", "国资/产业资本", "state-capital", "state-backed capital"],
      ["tencent_i", "moore_i", "创业融资", "startup-funding", "startup funding"],
    ],
  },
};

const localizationData = [
  {
    component: "AI GPU / 训练加速器",
    global: "NVIDIA、AMD、Broadcom 定制 ASIC",
    china: "华为昇腾、寒武纪、壁仞、摩尔线程、沐曦",
    status: "部分替代",
    assessment: "推理、政企私有云和部分训练场景可替代；高端训练生态、CUDA 软件栈、HBM 供给和先进制程仍是主要约束。",
    sources: [
      ["寒武纪", "https://www.cambricon.com/"],
      ["摩尔线程", "https://www.mthreads.com/"],
      ["壁仞科技", "https://www.birentech.com/"],
    ],
  },
  {
    component: "HBM / 高端 DRAM",
    global: "SK hynix、Samsung、Micron",
    china: "长鑫存储；国内 HBM 仍处追赶/验证阶段",
    status: "高度依赖",
    assessment: "DDR5/LPDDR 有国产进展，但 AI 加速器所需 HBM3E/HBM4 的良率、堆叠、封装和客户认证仍高度依赖海外。",
    sources: [["长鑫存储", "https://www.cxmt.com/"]],
  },
  {
    component: "先进逻辑代工",
    global: "TSMC、Samsung Foundry、Intel Foundry",
    china: "中芯国际、华虹、晶合集成",
    status: "高度依赖",
    assessment: "成熟与特色工艺替代能力较强；3nm/2nm、EUV、先进 GAA 仍高度依赖海外供应链。",
    sources: [["SMIC", "https://www.smics.com/"]],
  },
  {
    component: "先进封装 / 2.5D",
    global: "TSMC CoWoS、Intel EMIB/Foveros、Samsung I-Cube",
    china: "长电科技、通富微电、华天科技、甬矽电子",
    status: "部分替代",
    assessment: "OSAT 基础强，部分先进封装可做；但大规模 2.5D/HBM 一体化、硅中介层和系统级良率仍需追赶。",
    sources: [
      ["长电科技", "https://www.jcetglobal.com/"],
      ["通富微电", "https://www.tfme.com/"],
    ],
  },
  {
    component: "EDA 全流程",
    global: "Synopsys、Cadence、Siemens EDA",
    china: "华大九天、概伦电子、芯和半导体、广立微",
    status: "部分替代",
    assessment: "模拟、建模、制造类 EDA 和若干点工具进展明显；先进数字全流程 signoff 与生态兼容仍依赖海外三巨头。",
    sources: [
      ["概伦电子", "https://www.primarius-tech.com/"],
      ["芯和半导体", "https://www.xpeedic.com/"],
    ],
  },
  {
    component: "IP / 芯片设计服务",
    global: "Arm、Synopsys IP、Cadence IP",
    china: "芯原股份、芯来科技、平头哥、赛昉科技",
    status: "部分替代",
    assessment: "RISC-V、NPU、接口 IP 和设计服务有国产能力；高端 CPU/GPU IP、生态软件和国际客户认证仍有差距。",
    sources: [["芯原股份", "https://www.verisilicon.com/"]],
  },
  {
    component: "光刻设备",
    global: "ASML EUV/DUV、Nikon、Canon",
    china: "上海微电子",
    status: "高度依赖",
    assessment: "先进封装/显示/部分前道光刻有国产设备；先进浸没式 DUV 和 EUV 是最硬瓶颈之一。",
    sources: [["上海微电子", "https://www.smee.com.cn/"]],
  },
  {
    component: "刻蚀 / 沉积 / 清洗",
    global: "Applied Materials、Lam Research、Tokyo Electron",
    china: "北方华创、中微公司、拓荆科技、盛美上海",
    status: "部分替代",
    assessment: "成熟节点、部分先进节点设备替代能力显著增强；顶级先进制程、关键零部件和长期稳定性仍需验证。",
    sources: [
      ["北方华创", "https://www.naura.com/"],
      ["盛美上海", "https://www.acmrcsh.com/"],
      ["拓荆科技", "https://www.piotech.cn/"],
    ],
  },
  {
    component: "量测 / 检测",
    global: "KLA、Applied Materials、Hitachi High-Tech",
    china: "精测电子、中科飞测、上海睿励、东方晶源",
    status: "高度依赖",
    assessment: "局部量测、缺陷检测和国产替代在推进；先进过程控制和高端 e-beam/光学检测仍依赖海外。",
    sources: [["KLA 对标参考", "https://www.kla.com/"]],
  },
  {
    component: "光刻胶 / CMP / 湿化学",
    global: "JSR、TOK、Shin-Etsu、Entegris",
    china: "南大光电、上海新阳、晶瑞电材、安集科技、江丰电子",
    status: "部分替代",
    assessment: "CMP、靶材、湿化学和部分 KrF/ArF 材料有替代进展；EUV 胶和高端材料体系仍高度依赖海外。",
    sources: [["安集科技", "https://www.anjimicro.com/"]],
  },
  {
    component: "硅片 / 晶圆材料",
    global: "Shin-Etsu Handotai、SUMCO、GlobalWafers",
    china: "沪硅产业、中环领先、立昂微、神工股份",
    status: "部分替代",
    assessment: "8/12 英寸硅片国产化提升；先进逻辑用高规格硅片、SOI/外延一致性和客户认证仍需补强。",
    sources: [["沪硅产业", "https://www.nsig.com/"]],
  },
  {
    component: "ABF / 高端封装基板",
    global: "Ibiden、Unimicron、Shinko",
    china: "深南电路、兴森科技、珠海越亚、景旺电子",
    status: "部分替代",
    assessment: "PCB 与部分 IC 载板有国产能力；AI 大芯片所需高层数 ABF 基板仍受海外和台日厂商牵制。",
    sources: [["深南电路", "https://www.scc.com.cn/"]],
  },
  {
    component: "OSAT 封测",
    global: "ASE、Amkor、JCET",
    china: "长电科技、通富微电、华天科技",
    status: "可替代",
    assessment: "传统封测和多类先进封装国产能力较强；最先进 AI 2.5D/HBM 大规模集成仍属于继续攻关项。",
    sources: [
      ["长电科技", "https://www.jcetglobal.com/"],
      ["通富微电", "https://www.tfme.com/"],
    ],
  },
  {
    component: "光模块 / 数据中心互连",
    global: "Coherent、Lumentum、Broadcom、Marvell",
    china: "中际旭创、新易盛、光迅科技、海信宽带、华工科技",
    status: "可替代",
    assessment: "800G/1.6T 光模块制造和封装能力强；上游高速 DSP、激光器、部分硅光平台仍存在外部依赖。",
    sources: [["中际旭创", "https://www.innolight.com/"]],
  },
];

const localizationEn = {
  "AI GPU / 训练加速器": {
    component: "AI GPU / Training Accelerators",
    china: "Huawei Ascend, Cambricon, Biren, Moore Threads, MetaX",
    assessment: "Substitution is plausible in inference, private-cloud and selected training workloads. High-end training ecosystems, CUDA compatibility, HBM supply and advanced-node access remain key constraints.",
  },
  "HBM / 高端 DRAM": {
    component: "HBM / High-End DRAM",
    china: "CXMT; domestic HBM remains in catch-up and validation stages",
    assessment: "China has made progress in DDR5 and LPDDR, but HBM3E/HBM4 stack yield, packaging, integration and customer qualification remain highly dependent on overseas leaders.",
  },
  "先进逻辑代工": {
    component: "Advanced Logic Foundry",
    china: "SMIC, Hua Hong, Nexchip",
    assessment: "Mature and specialty nodes have stronger substitution potential. 3nm/2nm, EUV-enabled scaling and advanced GAA remain highly dependent on overseas supply chains.",
  },
  "先进封装 / 2.5D": {
    component: "Advanced Packaging / 2.5D",
    china: "JCET, Tongfu Microelectronics, Huatian Technology, Forehope",
    assessment: "China has a strong OSAT base and some advanced-packaging capability, while large-scale 2.5D/HBM integration, silicon interposers and system-level yield still need catch-up.",
  },
  "EDA 全流程": {
    component: "Full-Flow EDA",
    china: "Empyrean, Primarius, Xpeedic, Semitronix",
    assessment: "Analog, modeling, manufacturing EDA and point tools are improving. Advanced digital signoff and ecosystem compatibility still rely heavily on the global EDA triopoly.",
  },
  "IP / 芯片设计服务": {
    component: "IP / Chip Design Services",
    china: "VeriSilicon, Nuclei, T-Head, StarFive",
    assessment: "RISC-V, NPU, interface IP and design services have local capability. High-end CPU/GPU IP, software ecosystems and global qualification remain gaps.",
  },
  "光刻设备": {
    component: "Lithography Equipment",
    china: "SMEE",
    assessment: "Domestic tools exist for advanced packaging, display and some front-end use cases. Immersion DUV and EUV remain among the hardest bottlenecks.",
  },
  "刻蚀 / 沉积 / 清洗": {
    component: "Etch / Deposition / Clean",
    china: "NAURA, AMEC, Piotech, ACM Research Shanghai",
    assessment: "Domestic substitution has strengthened at mature and selected advanced nodes. Top-tier advanced processes, key components and long-run stability still need validation.",
  },
  "量测 / 检测": {
    component: "Metrology / Inspection",
    china: "Jingce, Skyverse, RSIC, Dongfang Jingyuan",
    assessment: "Domestic metrology and inspection tools are advancing in selected areas, while high-end process control, e-beam and optical inspection still depend on overseas leaders.",
  },
  "光刻胶 / CMP / 湿化学": {
    component: "Photoresist / CMP / Wet Chemicals",
    china: "Nata Opto-electronic, Sinyang, Jingrui, Anji Micro, Konfoong",
    assessment: "CMP, sputtering targets, wet chemicals and some KrF/ArF materials have substitution progress. EUV resist and advanced material systems remain highly dependent.",
  },
  "硅片 / 晶圆材料": {
    component: "Silicon Wafers / Wafer Materials",
    china: "NSIG, Zhonghuan, Leon Micro, Thinkon",
    assessment: "8-inch and 12-inch wafer localization is rising. High-spec wafers for advanced logic, SOI/epi consistency and customer qualification still require improvement.",
  },
  "ABF / 高端封装基板": {
    component: "ABF / High-End Package Substrates",
    china: "SCC, Fastprint, Zhuhai Access, Kinwong",
    assessment: "China has PCB and selected IC substrate capability. High-layer-count ABF substrates for large AI packages remain constrained by overseas and Taiwan/Japan suppliers.",
  },
  "OSAT 封测": {
    component: "OSAT Packaging and Test",
    china: "JCET, Tongfu Microelectronics, Huatian Technology",
    assessment: "Traditional package/test and several advanced package types are substitutable. The most advanced AI 2.5D/HBM integration remains an active catch-up area.",
  },
  "光模块 / 数据中心互连": {
    component: "Optical Modules / Data-Center Interconnect",
    china: "Innolight, Eoptolink, Accelink, Hisense Broadband, HGTech",
    assessment: "China has strong 800G/1.6T optical-module manufacturing and packaging capability. High-speed DSP, lasers and parts of silicon photonics still create upstream dependence.",
  },
};

const state = {
  segmentId: "ai_accelerator_design",
  companyId: "nvidia",
  layer: "all",
  mapScope: "segment",
  mapProjection: "globe",
  globeLon: 18,
  globeLat: 20,
  globeZoom: 1,
  query: "",
  partIndex: -1,
  view: "package",
  networkMode: "origin",
  networkLayout: "circle",
  networkPositions: {},
  networkNodeId: "taiwan",
  localizationStatus: "all",
  lang: "zh",
  worldFeatures: null,
};

const elements = {
  workspace: document.getElementById("workspace"),
  viewToggle: document.getElementById("viewToggle"),
  langToggle: document.getElementById("langToggle"),
  segmentGrid: document.getElementById("segmentGrid"),
  layerTabs: document.getElementById("layerTabs"),
  activeLayer: document.getElementById("activeLayer"),
  activeSegmentName: document.getElementById("activeSegmentName"),
  segmentLayerLabel: document.getElementById("segmentLayerLabel"),
  segmentTitle: document.getElementById("segmentTitle"),
  segmentDevices: document.getElementById("segmentDevices"),
  segmentCount: document.getElementById("segmentCount"),
  extractionLabel: document.getElementById("extractionLabel"),
  extractionTitle: document.getElementById("extractionTitle"),
  extractionDevices: document.getElementById("extractionDevices"),
  flightModule: document.getElementById("flightModule"),
  chipPlane: document.getElementById("chipPlane"),
  chipLinks: document.getElementById("chipLinks"),
  subLayerGrid: document.getElementById("subLayerGrid"),
  partCard: document.getElementById("partCard"),
  thirdLayerGrid: document.getElementById("thirdLayerGrid"),
  resetPart: document.getElementById("resetPart"),
  playerList: document.getElementById("playerList"),
  worldMap: document.getElementById("worldMap"),
  mapBase: document.getElementById("mapBase"),
  mapNetwork: document.getElementById("mapNetwork"),
  mapMarkers: document.getElementById("mapMarkers"),
  mapProjectionToggle: document.getElementById("mapProjectionToggle"),
  globeControls: document.getElementById("globeControls"),
  mapTooltip: document.getElementById("mapTooltip"),
  chainReality: document.getElementById("chainReality"),
  companyCard: document.getElementById("companyCard"),
  miniNetwork: document.getElementById("miniNetwork"),
  miniNetworkKicker: document.getElementById("miniNetworkKicker"),
  miniNetworkTitle: document.getElementById("miniNetworkTitle"),
  openNetworkView: document.getElementById("openNetworkView"),
  searchInput: document.getElementById("searchInput"),
  scopeSegment: document.getElementById("scopeSegment"),
  scopeAll: document.getElementById("scopeAll"),
  networkView: document.getElementById("networkView"),
  networkSwitch: document.getElementById("networkSwitch"),
  networkLayoutSwitch: document.getElementById("networkLayoutSwitch"),
  networkCanvas: document.getElementById("networkCanvas"),
  networkInfo: document.getElementById("networkInfo"),
  localizationView: document.getElementById("localizationView"),
  localizationFilters: document.getElementById("localizationFilters"),
  localizationGrid: document.getElementById("localizationGrid"),
};

let lastFlightKey = "";
let worldMapDataPromise = null;
let globeDrag = null;
let networkDrag = null;
let suppressNetworkClick = false;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function t(key) {
  return i18n[state.lang]?.[key] || i18n.zh[key] || key;
}

function localPair(zh, en) {
  return state.lang === "en" ? en || zh : zh;
}

function statusLabel(status) {
  return t(statusKey[status] || status);
}

function segmentName(segment) {
  return state.lang === "en" ? segmentEn[segment.id]?.name || segment.name : segment.name;
}

function segmentLayer(segment) {
  return state.lang === "en" ? layerLabelsEn[segment.layer] || segment.layer : segment.layer;
}

function segmentDevicesText(segment) {
  return state.lang === "en" ? segmentEn[segment.id]?.devices || segment.devices : segment.devices;
}

function splitParts(text) {
  return text
    .split(/[、,，;]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 12);
}

function activeSegment() {
  return segments.find((segment) => segment.id === state.segmentId) || segments[0];
}

function segmentParts(segment) {
  return splitParts(segmentDevicesText(segment));
}

function activePhysicalLayer() {
  const segment = activeSegment();
  return (
    physicalLayers.find((layer) => layer.segments.includes(segment.id)) ||
    physicalLayers.find((layer) => layer.id === "compute_die")
  );
}

function segmentById(id) {
  return segments.find((segment) => segment.id === id);
}

function physicalLayerName(layer) {
  return localPair(layer.zh, layer.en);
}

function physicalLayerAnchor(layer) {
  return localPair(layer.anchorZh, layer.anchorEn);
}

function chipComponentLabel(componentId) {
  const component = chipComponents[componentId];
  return component ? localPair(component.zh, component.en) : componentId;
}

function chipComponentKind(componentId) {
  const component = chipComponents[componentId];
  return component ? localPair(component.kindZh, component.kindEn) : "";
}

function chipComponentShortLabel(componentId) {
  const labels = chipShortLabels[componentId];
  return labels ? localPair(labels[0], labels[1]) : chipComponentLabel(componentId);
}

function activeChipComponents() {
  const segment = activeSegment();
  const active = new Set();
  Object.entries(chipComponents).forEach(([id, component]) => {
    if (component.segments.includes(segment.id)) active.add(id);
  });
  if (!active.size) {
    const layer = activePhysicalLayer();
    layer.segments.forEach((segmentId) => {
      Object.entries(chipComponents).forEach(([id, component]) => {
        if (component.segments.includes(segmentId)) active.add(id);
      });
    });
  }
  return active;
}

function chipEndpointComponent(nodeId) {
  return chipNodeComponents[nodeId] || nodeId;
}

function chipNodePoint(nodeId) {
  const fallback = chipNodeFallback[nodeId] || [340, 215];
  if (!elements.chipPlane) return { x: fallback[0], y: fallback[1] };
  const node = elements.chipPlane.querySelector(`[data-chip-node="${nodeId}"]`);
  const planeBounds = elements.chipPlane.getBoundingClientRect();
  const nodeBounds = node?.getBoundingClientRect();
  if (!nodeBounds || !planeBounds.width || !planeBounds.height) {
    return { x: fallback[0], y: fallback[1] };
  }
  return {
    x: ((nodeBounds.left + nodeBounds.width / 2 - planeBounds.left) / planeBounds.width) * 680,
    y: ((nodeBounds.top + nodeBounds.height / 2 - planeBounds.top) / planeBounds.height) * 430,
  };
}

function chipLinkPath(source, target) {
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;
  const dx = Math.abs(target.x - source.x);
  const dy = Math.abs(target.y - source.y);
  if (dx > dy) return `M${source.x.toFixed(1)} ${source.y.toFixed(1)} C${midX.toFixed(1)} ${source.y.toFixed(1)} ${midX.toFixed(1)} ${target.y.toFixed(1)} ${target.x.toFixed(1)} ${target.y.toFixed(1)}`;
  return `M${source.x.toFixed(1)} ${source.y.toFixed(1)} C${source.x.toFixed(1)} ${midY.toFixed(1)} ${target.x.toFixed(1)} ${midY.toFixed(1)} ${target.x.toFixed(1)} ${target.y.toFixed(1)}`;
}

function componentPrimarySegment(componentId) {
  const component = chipComponents[componentId];
  if (!component) return null;
  return component.segments.map(segmentById).find(Boolean);
}

function partKind(part) {
  const text = normalize(part);
  if (/scanner|光刻|euv|duv|lithography/.test(text)) return "设备";
  if (/substrate|wafer|photoresist|chemical|gas|材料|硅片|基板|光刻胶/.test(text)) return "材料";
  if (/test|probe|burn|ate|测试|探针/.test(text)) return "测试";
  if (/pack|bond|interposer|tsv|bump|封装/.test(text)) return "封装";
  if (/switch|nic|dpu|retimer|serdes|ethernet|光|transceiver|interconnect/.test(text)) return "互连";
  if (/cpu|gpu|asic|die|core|sram|controller|phy|soc|npu/.test(text)) return "器件";
  return "工艺/模块";
}

function partDescription(part, segment) {
  if (state.lang === "en") {
    const kind = partKind(part);
    const companyNames = segment.players
      .slice(0, 3)
      .map((id) => companies[id]?.name)
      .filter(Boolean)
      .join(", ");
    return `${part} is a next-layer ${kind} node under "${segmentName(segment)}". It links the segment-level value chain to concrete devices, process steps, materials or modules. Closely related players include ${companyNames}.`;
  }
  const kind = partKind(part);
  const companyNames = segment.players
    .slice(0, 3)
    .map((id) => companies[id]?.name)
    .filter(Boolean)
    .join("、");
  return `${part} 是「${segment.name}」向下一层展开后的${kind}节点。它把产业链从环节级推进到具体器件、工艺或材料级，适合继续挂接供应商、客户、工艺路线和投资关系。当前最相关的玩家包括 ${companyNames}。`;
}

function detailVocabulary(part, segment) {
  const text = normalize(`${part} ${segment.name} ${segment.devices}`);
  if (/hbm|dram|nand|memory|ddr|存储/.test(text)) {
    return {
      material: "DRAM wafer、TSV copper、underfill、molding compound、substrate",
      equipment: "DRAM lithography、etch/deposition、bonding、memory tester",
      process: "TSV stacking、microbump、MR-MUF/TC-NCF、known-good-die test",
    };
  }
  if (/euv|duv|scanner|光刻|photoresist|mask|reticle/.test(text)) {
    return {
      material: "photoresist、mask blank、pellicle、ultra-pure chemicals",
      equipment: "scanner、track、metrology、mask writer、inspection",
      process: "OPC、exposure、develop、overlay control、defect inspection",
    };
  }
  if (/substrate|abf|interposer|package|bond|tsv|bump|封装|基板/.test(text)) {
    return {
      material: "ABF film、BT resin、copper foil、solder resist、underfill",
      equipment: "bumping、bonding、molding、warpage metrology、final test",
      process: "2.5D/3D integration、hybrid bonding、fan-out、thermal-mechanical control",
    };
  }
  if (/ethernet|switch|nic|dpu|retimer|serdes|optical|transceiver|光|互连/.test(text)) {
    return {
      material: "InP/GaAs、silicon photonics wafer、fiber、copper cable、PCB laminate",
      equipment: "high-speed tester、optical alignment、packaging、signal integrity tools",
      process: "PAM4/DSP、equalization、co-packaged optics、thermal tuning、link training",
    };
  }
  if (/power|vrm|mosfet|gan|cool|液冷|机柜|散热|电源/.test(text)) {
    return {
      material: "GaN/SiC/Si power wafer、magnetics、TIM、cold plate、coolant",
      equipment: "power module assembly、thermal test、liquid loop validation",
      process: "voltage conversion、thermal transfer、rack-level power distribution、leak testing",
    };
  }
  if (/eda|rtl|timing|verification|simulation|ip/.test(text)) {
    return {
      material: "IP libraries、PDK、standard cells、memory compiler、verification IP",
      equipment: "emulator、formal engine、place-route engine、3DIC simulator",
      process: "RTL signoff、physical implementation、timing/power closure、DFT",
    };
  }
  return {
    material: "advanced wafer、substrate、interconnect metal、dielectric、thermal interface material",
    equipment: "EDA flow、wafer process tools、inspection、ATE、packaging line",
    process: "design closure、wafer fabrication、yield ramp、advanced packaging、system validation",
  };
}

function thirdLayerItems(part, segment) {
  const topic = part || segment.name;
  const vocab = detailVocabulary(topic, segment);
  const supplierIds = segment.players.filter((id) => companies[id]).slice(0, 5);
  const supplierNames = supplierIds.map((id) => companies[id].name).join("、");
  return [
    {
      kind: "材料",
      title: `${topic} · ${state.lang === "en" ? "Material inputs" : "材料输入"}`,
      body: vocab.material,
      tags: vocab.material.split("、").slice(0, 4),
    },
    {
      kind: "设备",
      title: `${topic} · ${state.lang === "en" ? "Key equipment" : "关键设备"}`,
      body: vocab.equipment,
      tags: vocab.equipment.split("、").slice(0, 4),
    },
    {
      kind: "工艺",
      title: `${topic} · ${state.lang === "en" ? "Process route" : "工艺路线"}`,
      body: vocab.process,
      tags: vocab.process.split("、").slice(0, 4),
    },
    {
      kind: "供应商",
      title: `${topic} · ${state.lang === "en" ? "Related players" : "相关玩家"}`,
      body: supplierNames,
      companyIds: supplierIds,
      tags: supplierIds.map((id) => companies[id].name),
    },
  ];
}

function launchModule(key, segment, activePart) {
  if (!elements.flightModule || key === lastFlightKey) return;
  lastFlightKey = key;
  elements.flightModule.innerHTML = `
    <span>${escapeHtml(activePart ? t("nextLayer") : segmentLayer(segment))}</span>
    <strong>${escapeHtml(activePart || segmentName(segment))}</strong>
  `;
  elements.flightModule.className = "flight-module";
  const run = () => {
    elements.flightModule.className = "flight-module launch";
  };
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(run);
  } else {
    run();
  }
}

function normalize(value) {
  return String(value ?? "").toLowerCase();
}

function companyMatches(id, query) {
  const company = companies[id];
  if (!company) return false;
  const haystack = [
    company.name,
    company.country,
    company.city,
    company.address,
    company.ceo,
    company.role,
    company.summary,
  ].join(" ");
  return normalize(haystack).includes(query);
}

function segmentMatches(segment, query) {
  if (!query) return true;
  const segmentHaystack = [
    segment.name,
    segment.layer,
    segment.devices,
    segmentEn[segment.id]?.name,
    segmentEn[segment.id]?.devices,
    layerLabelsEn[segment.layer],
  ].join(" ");
  return (
    normalize(segmentHaystack).includes(query) ||
    segment.players.some((id) => companyMatches(id, query))
  );
}

function filteredSegments() {
  const query = normalize(state.query.trim());
  return segments.filter((segment) => {
    const layerMatch = state.layer === "all" || segment.group === state.layer;
    return layerMatch && segmentMatches(segment, query);
  });
}

function allPlayerIds() {
  return [...new Set(segments.flatMap((segment) => segment.players))];
}

function visibleCompanyIds() {
  const query = normalize(state.query.trim());
  if (query) return allPlayerIds().filter((id) => companyMatches(id, query));
  if (state.mapScope === "all") return allPlayerIds();
  return activeSegment().players;
}

function lonLatToPoint(lon, lat) {
  return {
    x: ((lon + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 520,
  };
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function globeCenter() {
  return { lon: state.globeLon, lat: state.globeLat };
}

function projectGlobe(lon, lat) {
  const center = globeCenter();
  const radius = 218 * state.globeZoom;
  const lonRad = degreesToRadians(lon);
  const latRad = degreesToRadians(lat);
  const lon0 = degreesToRadians(center.lon);
  const lat0 = degreesToRadians(center.lat);
  const dLon = lonRad - lon0;
  const cosc = Math.sin(lat0) * Math.sin(latRad) + Math.cos(lat0) * Math.cos(latRad) * Math.cos(dLon);
  return {
    x: 500 + radius * Math.cos(latRad) * Math.sin(dLon),
    y: 260 - radius * (Math.cos(lat0) * Math.sin(latRad) - Math.sin(lat0) * Math.cos(latRad) * Math.cos(dLon)),
    visible: cosc >= -0.04,
  };
}

function hasD3Map() {
  return Boolean(window.d3 && window.topojson && state.worldFeatures);
}

function d3MapProjection() {
  if (!hasD3Map()) return null;
  if (state.mapProjection === "globe") {
    const center = globeCenter();
    return window.d3
      .geoOrthographic()
      .scale(224 * state.globeZoom)
      .translate([500, 260])
      .rotate([-center.lon, -center.lat])
      .clipAngle(90);
  }
  return window.d3.geoNaturalEarth1().fitExtent(
    [
      [26, 28],
      [974, 494],
    ],
    { type: "Sphere" }
  );
}

function projectPoint(lon, lat) {
  const projection = d3MapProjection();
  if (projection) {
    const point = projection([lon, lat]);
    const visible = state.mapProjection === "globe" ? projectGlobe(lon, lat).visible : true;
    return { x: point?.[0] ?? 0, y: point?.[1] ?? 0, visible };
  }
  if (state.mapProjection === "globe") return projectGlobe(lon, lat);
  return { ...lonLatToPoint(lon, lat), visible: true };
}

function loadWorldMapData() {
  if (!window.d3 || !window.topojson || state.worldFeatures || worldMapDataPromise) return;
  worldMapDataPromise = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then((response) => {
      if (!response.ok) throw new Error(`map ${response.status}`);
      return response.json();
    })
    .then((topology) => {
      state.worldFeatures = window.topojson.feature(topology, topology.objects.countries).features;
      renderMapBase();
      renderMapNetwork();
      renderMarkers();
    })
    .catch(() => {
      state.worldFeatures = null;
    });
}

function pathFromPoints(points) {
  const projected = points.map(([lon, lat]) => projectPoint(lon, lat));
  const visible = state.mapProjection === "world" || projected.some((point) => point.visible);
  if (!visible) return "";
  return projected
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ") + " Z";
}

function graticulePath() {
  const paths = [];
  const sampleLine = (points) =>
    points
      .map(([lon, lat], index) => {
        const point = projectPoint(lon, lat);
        if (state.mapProjection === "globe" && !point.visible) return "";
        return `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
      })
      .filter(Boolean)
      .join(" ");

  for (let lon = -180; lon <= 180; lon += 30) {
    const points = [];
    for (let lat = -75; lat <= 75; lat += 5) points.push([lon, lat]);
    const path = sampleLine(points);
    if (path) paths.push(path);
  }

  for (let lat = -60; lat <= 60; lat += 30) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 5) points.push([lon, lat]);
    const path = sampleLine(points);
    if (path) paths.push(path);
  }
  return paths.join(" ");
}

function renderMapBase() {
  loadWorldMapData();

  if (hasD3Map()) {
    const projection = d3MapProjection();
    const path = window.d3.geoPath(projection);
    const sphere = path({ type: "Sphere" });
    const graticule = path(window.d3.geoGraticule10());
    const countryPaths = state.worldFeatures
      .map((feature) => `<path class="land" d="${path(feature) || ""}"></path>`)
      .join("");
    const borderPaths = state.worldFeatures
      .map((feature) => `<path class="country-border" d="${path(feature) || ""}"></path>`)
      .join("");
    const labels = worldPolygons
      .filter((shape) => ["north_america", "south_america", "europe", "africa", "asia", "australia", "taiwan"].includes(shape.id))
      .map((shape) => {
        const point = projectPoint(shape.center[0], shape.center[1]);
        if (!point.visible) return "";
        return `<text class="map-label" x="${point.x.toFixed(1)}" y="${point.y.toFixed(1)}">${escapeHtml(localPair(shape.label[0], shape.label[1]))}</text>`;
      })
      .join("");

    elements.mapBase.innerHTML = `
      <defs>
        <linearGradient id="mapOceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d7ecfa"></stop>
          <stop offset="48%" stop-color="#edf7fb"></stop>
          <stop offset="100%" stop-color="#d8f3ee"></stop>
        </linearGradient>
        <radialGradient id="mapVignette" cx="42%" cy="30%" r="78%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.18)"></stop>
          <stop offset="70%" stop-color="rgba(37,99,235,0.02)"></stop>
          <stop offset="100%" stop-color="rgba(15,23,42,0.16)"></stop>
        </radialGradient>
      </defs>
      <path class="${state.mapProjection === "globe" ? "globe-rim" : "map-sphere"}" d="${sphere}"></path>
      <path class="grid-line" d="${graticule}"></path>
      <g>${countryPaths}</g>
      <g>${borderPaths}</g>
      ${labels}
      <path class="map-vignette" d="${sphere}"></path>
    `;
    return;
  }

  const landPaths = worldPolygons
    .map((shape) => {
      const path = pathFromPoints(shape.points);
      if (!path) return "";
      return `<path class="land" d="${path}"></path>`;
    })
    .join("");

  const labels = worldPolygons
    .filter((shape) => ["north_america", "south_america", "europe", "africa", "asia", "australia", "taiwan"].includes(shape.id))
    .map((shape) => {
      const point = projectPoint(shape.center[0], shape.center[1]);
      if (state.mapProjection === "globe" && !point.visible) return "";
      return `<text class="map-label" x="${point.x.toFixed(1)}" y="${point.y.toFixed(1)}">${escapeHtml(localPair(shape.label[0], shape.label[1]))}</text>`;
    })
    .join("");

  if (state.mapProjection === "globe") {
    elements.mapBase.innerHTML = `
      <defs>
        <linearGradient id="mapOceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d7ecfa"></stop>
          <stop offset="48%" stop-color="#edf7fb"></stop>
          <stop offset="100%" stop-color="#d8f3ee"></stop>
        </linearGradient>
        <radialGradient id="globeShade" cx="38%" cy="28%" r="72%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.38)"></stop>
          <stop offset="72%" stop-color="rgba(37,99,235,0.03)"></stop>
          <stop offset="100%" stop-color="rgba(17,32,51,0.26)"></stop>
        </radialGradient>
      </defs>
      <circle class="globe-rim" cx="500" cy="260" r="224"></circle>
      <path class="grid-line" d="${graticulePath()}"></path>
      ${landPaths}
      ${labels}
      <circle class="globe-shadow" cx="500" cy="260" r="224"></circle>
    `;
    return;
  }

  elements.mapBase.innerHTML = `
    <rect class="ocean" x="0" y="0" width="1000" height="520" rx="24"></rect>
    <path class="grid-line" d="${graticulePath()}"></path>
    ${landPaths}
    ${labels}
  `;
}

function mapArcPath(source, target) {
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const outwardX = midX - 500;
  const outwardY = midY - 260;
  const outwardLength = Math.max(1, Math.hypot(outwardX, outwardY));
  const lift = Math.min(120, Math.max(28, distance * 0.22));
  const cx = midX + (outwardX / outwardLength) * lift;
  const cy = midY + (outwardY / outwardLength) * lift;
  return `M${source.x.toFixed(1)} ${source.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${target.x.toFixed(1)} ${target.y.toFixed(1)}`;
}

function renderMapNetwork() {
  const geoNodes = networkGeoNodes[state.networkMode] || {};
  const data = networkData[state.networkMode] || networkData.origin;
  const edges = data.edges
    .map((edge) => {
      const [from, to, , type = state.networkMode] = edge;
      const sourceGeo = geoNodes[from];
      const targetGeo = geoNodes[to];
      if (!sourceGeo || !targetGeo) return "";
      const source = projectPoint(sourceGeo.lon, sourceGeo.lat);
      const target = projectPoint(targetGeo.lon, targetGeo.lat);
      if (state.mapProjection === "globe" && (!source.visible || !target.visible)) return "";
      return `<path class="map-network-edge edge-${escapeHtml(type)}" d="${mapArcPath(source, target)}"></path>`;
    })
    .join("");

  const nodes = Object.entries(geoNodes)
    .map(([id, geo]) => {
      const point = projectPoint(geo.lon, geo.lat);
      if (state.mapProjection === "globe" && !point.visible) return "";
      const node = data.nodes.find((item) => item.id === id);
      if (!node) return "";
      const active = id === state.networkNodeId ? "active" : "";
      return `
        <g class="map-network-node ${active}" transform="translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})" data-node="${escapeHtml(id)}">
          <circle r="${active ? 6.5 : 4.8}" fill="${networkColor(node.type)}"></circle>
          ${active ? `<text x="9" y="4">${escapeHtml(networkNodeLabel(node))}</text>` : ""}
        </g>
      `;
    })
    .join("");
  elements.mapNetwork.innerHTML = `${edges}${nodes}`;
}

function renderLayerTabs() {
  elements.layerTabs.innerHTML = layerTabs
    .map(
      ([id, label]) =>
        `<button type="button" class="${state.layer === id ? "active" : ""}" data-layer="${id}">${escapeHtml(state.lang === "en" ? layerTabLabelsEn[id] || label : label)}</button>`
    )
    .join("");
}

function renderViewToggle() {
  elements.viewToggle.innerHTML = viewTabs
    .map(([id, label]) => {
      const labelKey = id === "package" ? "packageView" : id === "network" ? "networkView" : "localizationView";
      return `<button type="button" class="${state.view === id ? "active" : ""}" data-view="${id}">${escapeHtml(t(labelKey) || label)}</button>`;
    })
    .join("");
}

function renderLanguageToggle() {
  elements.langToggle.innerHTML = `
    <button type="button" class="${state.lang === "zh" ? "active" : ""}" data-lang="zh">中文</button>
    <button type="button" class="${state.lang === "en" ? "active" : ""}" data-lang="en">EN</button>
  `;
}

function renderChromeText() {
  document.documentElement.lang = state.lang === "en" ? "en" : "zh-CN";
  document.title = t("appTitle");
  const title = document.querySelector(".brand-lockup h1");
  const subtitle = document.querySelector(".brand-lockup p");
  if (title) title.textContent = t("appTitle");
  if (subtitle) subtitle.textContent = t("appSubtitle");
  elements.searchInput.placeholder = t("searchPlaceholder");
  elements.scopeSegment.textContent = t("scopeSegment");
  elements.scopeAll.textContent = t("scopeAll");
  const nextLayerLabel = document.querySelector(".drilldown-header span");
  if (nextLayerLabel) nextLayerLabel.textContent = t("nextLayer");
  elements.resetPart.textContent = t("resetPart");
  const detailHeading = document.querySelector(".detail-heading span");
  if (detailHeading) detailHeading.textContent = t("thirdLayer");
  const networkHead = document.querySelector("#networkView .analysis-head");
  if (networkHead) {
    const kicker = networkHead.querySelector("span");
    const heading = networkHead.querySelector("h2");
    if (kicker) kicker.textContent = t("networkKicker");
    if (heading) heading.textContent = t("networkTitle");
  }
  const localHead = document.querySelector("#localizationView .analysis-head");
  if (localHead) {
    const kicker = localHead.querySelector("span");
    const heading = localHead.querySelector("h2");
    if (kicker) kicker.textContent = t("localizationKicker");
    if (heading) heading.textContent = t("localizationTitle");
  }
  if (elements.miniNetworkKicker) elements.miniNetworkKicker.textContent = t("networkPreview");
  if (elements.miniNetworkTitle) elements.miniNetworkTitle.textContent = t("networkSnapshot");
  if (elements.openNetworkView) elements.openNetworkView.textContent = t("openNetwork");
}

function renderMapProjectionToggle() {
  elements.mapProjectionToggle.innerHTML = `
    <button type="button" class="${state.mapProjection === "world" ? "active" : ""}" data-map-projection="world">World</button>
    <button type="button" class="${state.mapProjection === "globe" ? "active" : ""}" data-map-projection="globe">Globe</button>
  `;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function renderMapViewport() {
  renderMapProjectionToggle();
  renderMapBase();
  renderMapNetwork();
  renderMarkers();
  hideMapTooltip();
}

function setGlobeZoom(nextZoom) {
  state.globeZoom = clamp(nextZoom, 0.72, 2.35);
  if (state.mapProjection !== "globe") state.mapProjection = "globe";
  renderMapViewport();
}

function renderVisibility() {
  elements.workspace.hidden = state.view !== "package";
  elements.networkView.hidden = state.view !== "network";
  elements.localizationView.hidden = state.view !== "localization";
}

function renderSegments() {
  const shown = filteredSegments();
  if (!shown.length) {
    elements.segmentGrid.innerHTML = `<div class="empty-state">${escapeHtml(t("noSegment"))}</div>`;
    return;
  }

  if (!shown.some((segment) => segment.id === state.segmentId)) {
    state.segmentId = shown[0].id;
    state.companyId = shown[0].players[0];
    state.partIndex = -1;
  }

  elements.segmentGrid.innerHTML = shown
    .map((segment, index) => {
      const active = segment.id === state.segmentId ? "active" : "";
      return `
        <button class="segment-btn ${active}" type="button" data-segment="${escapeHtml(segment.id)}" title="${escapeHtml(segment.name)}">
          <span class="layer"><span>${escapeHtml(segmentLayer(segment))}</span><span>${String(index + 1).padStart(2, "0")}</span></span>
          <span class="name">${escapeHtml(segmentName(segment))}</span>
        </button>
      `;
    })
    .join("");
}

function renderPlayers() {
  const segment = activeSegment();
  const query = normalize(state.query.trim());
  const players = query
    ? segment.players.filter((id) => companyMatches(id, query))
    : segment.players;

  elements.activeLayer.textContent = segmentLayer(segment);
  elements.activeSegmentName.textContent = segmentName(segment);
  elements.segmentLayerLabel.textContent = segmentLayer(segment);
  elements.segmentTitle.textContent = segmentName(segment);
  elements.segmentDevices.textContent = segmentDevicesText(segment);
  elements.segmentCount.textContent = String(segment.players.length);

  if (!players.length) {
    elements.playerList.innerHTML = `<div class="empty-state">${escapeHtml(t("noCompany"))}</div>`;
    return;
  }

  if (!players.includes(state.companyId) && !segment.players.includes(state.companyId)) {
    state.companyId = players[0];
  }

  elements.playerList.innerHTML = players
    .map((id) => {
      const company = companies[id];
      const rank = segment.players.indexOf(id) + 1;
      const active = id === state.companyId ? "active" : "";
      return `
        <button class="player-card ${active}" type="button" data-company="${escapeHtml(id)}" title="${escapeHtml(company.name)}">
          <span class="rank">${rank}</span>
          <span class="player-copy">
            <strong>${escapeHtml(company.name)}</strong>
            <span>${escapeHtml(company.role)}</span>
          </span>
          <span class="country-pill">${escapeHtml(company.city)}</span>
        </button>
      `;
    })
    .join("");
}

function renderExtraction() {
  const segment = activeSegment();
  const parts = segmentParts(segment);
  const activePart = state.partIndex >= 0 ? parts[state.partIndex] : "";
  const layer = activePhysicalLayer();
  elements.extractionLabel.textContent = `${t("physicalKicker")} · ${physicalLayerName(layer)}`;
  elements.extractionTitle.textContent = activePart || segmentName(segment);
  elements.extractionDevices.textContent = activePart
    ? partDescription(activePart, segment)
    : `${physicalLayerAnchor(layer)} ${segmentDevicesText(segment)}`;
  launchModule(`${segment.id}:${state.partIndex}`, segment, activePart);
}

function renderSubLayers() {
  const segment = activeSegment();
  const parts = segmentParts(segment);
  if (state.partIndex >= parts.length) state.partIndex = -1;

  elements.subLayerGrid.innerHTML = parts
    .map((part, index) => {
      const active = index === state.partIndex ? "active" : "";
      return `<button class="part-chip ${active}" type="button" data-part="${index}" title="${escapeHtml(part)}">${escapeHtml(part)}</button>`;
    })
    .join("");

  if (state.partIndex < 0) {
    elements.partCard.innerHTML = `
      <span class="part-kicker">MODULE OVERVIEW</span>
      <h3>${escapeHtml(segmentName(segment))}</h3>
      <p>${escapeHtml(state.lang === "en" ? `This segment sits in the ${segmentLayer(segment)} layer and breaks down into devices, process steps, materials and system modules for supplier, customer, process and investment mapping.` : `这个环节承接 ${segmentLayer(segment)} 层的关键能力，并向下分解为器件、工艺、材料和系统模块。当前拆解颗粒用于继续挂接供应商、客户、工艺路线和投资关系。`)}</p>
      <div class="part-links">
        ${segment.players
          .map((id) => `<button type="button" data-company="${escapeHtml(id)}">${escapeHtml(companies[id].name)}</button>`)
          .join("")}
      </div>
    `;
    return;
  }

  const part = parts[state.partIndex];
  elements.partCard.innerHTML = `
    <span class="part-kicker">${escapeHtml(partKind(part))}</span>
    <h3>${escapeHtml(part)}</h3>
    <p>${escapeHtml(partDescription(part, segment))}</p>
    <div class="part-links">
      ${segment.players
        .map((id) => `<button type="button" data-company="${escapeHtml(id)}">${escapeHtml(companies[id].name)}</button>`)
        .join("")}
    </div>
  `;
}

function renderThirdLayers() {
  const segment = activeSegment();
  const parts = segmentParts(segment);
  const activePart = state.partIndex >= 0 ? parts[state.partIndex] : "";
  const items = thirdLayerItems(activePart, segment);
  elements.thirdLayerGrid.innerHTML = items
    .map((item) => {
      const tags = item.companyIds
        ? item.companyIds
            .map((id) => `<button type="button" data-company="${escapeHtml(id)}">${escapeHtml(companies[id].name)}</button>`)
            .join("")
        : item.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      return `
        <article class="third-card" data-kind="${escapeHtml(item.kind)}">
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
          <div class="third-tags">${tags}</div>
        </article>
      `;
    })
    .join("");
}

function renderMarkers() {
  const ids = visibleCompanyIds().filter((id) => companies[id]);
  const coordinateCounts = new Map();
  const visibleSet = new Set(activeSegment().players);

  elements.mapMarkers.innerHTML = ids
    .map((id) => {
      const company = companies[id];
      const point = projectPoint(company.lon, company.lat);
      const hidden = point.visible ? "" : "hidden-marker";
      const key = `${Math.round(point.x / 8)}:${Math.round(point.y / 8)}`;
      const count = coordinateCounts.get(key) || 0;
      coordinateCounts.set(key, count + 1);
      const angle = count * 2.3999632297;
      const radius = count ? 11 + count * 2 : 0;
      const x = point.x + Math.cos(angle) * radius;
      const y = point.y + Math.sin(angle) * radius;
      const active = id === state.companyId ? "active" : "";
      const segmentClass = visibleSet.has(id) ? "segment" : "";
      const label = active || ids.length <= 12 ? `<text x="18" y="4">${escapeHtml(company.name)}</text>` : "";

      return `
        <g class="marker ${active} ${segmentClass} ${hidden}" transform="translate(${x.toFixed(2)} ${y.toFixed(2)})" data-company="${escapeHtml(id)}" tabindex="0" role="button" aria-label="${escapeHtml(company.name)}">
          <circle class="pin-ring" cx="0" cy="0" r="${active ? 12 : 9}"></circle>
          <circle class="pin-dot" cx="0" cy="0" r="${active ? 5.5 : 4.2}"></circle>
          ${label}
        </g>
      `;
    })
    .join("");
}

function showMapTooltip(companyId, event) {
  const company = companies[companyId];
  if (!company || !elements.mapTooltip) return;
  const bounds = elements.worldMap.getBoundingClientRect();
  elements.mapTooltip.hidden = false;
  elements.mapTooltip.innerHTML = `
    <strong>${escapeHtml(company.name)}</strong>
    <span>${escapeHtml(company.city)} · ${escapeHtml(company.country)}</span>
    <span>${escapeHtml(company.role)}</span>
  `;
  const left = Math.min(Math.max(event.clientX - bounds.left + 14, 8), Math.max(8, bounds.width - 270));
  const top = Math.min(Math.max(event.clientY - bounds.top + 14, 8), Math.max(8, bounds.height - 96));
  elements.mapTooltip.style.left = `${left}px`;
  elements.mapTooltip.style.top = `${top}px`;
}

function hideMapTooltip() {
  if (elements.mapTooltip) elements.mapTooltip.hidden = true;
}

function renderCompanyCard() {
  const company = companies[state.companyId] || companies[activeSegment().players[0]];
  state.companyId = Object.entries(companies).find(([, item]) => item === company)?.[0] || state.companyId;
  elements.companyCard.innerHTML = `
    <div class="company-kicker">
      <span>${escapeHtml(company.city)} · ${escapeHtml(company.country)}</span>
      <span>${escapeHtml(company.confidence)}</span>
    </div>
    <h3>${escapeHtml(company.name)}</h3>
    <p class="summary">${escapeHtml(company.summary)}</p>
    <div class="fact-grid">
      <div class="fact"><span>${escapeHtml(t("address"))}</span><strong>${escapeHtml(company.address)}</strong></div>
      <div class="fact"><span>CEO</span><strong>${escapeHtml(company.ceo)}</strong></div>
      <div class="fact"><span>${escapeHtml(t("founded"))}</span><strong>${escapeHtml(company.founded)}</strong></div>
      <div class="fact"><span>${escapeHtml(t("founders"))}</span><strong>${escapeHtml(company.founders)}</strong></div>
    </div>
    <div class="source-row">
      <a href="${escapeHtml(company.source)}" target="_blank" rel="noreferrer">${escapeHtml(t("source"))}</a>
      <span class="data-state">${escapeHtml(company.role)}</span>
    </div>
  `;
}

function renderMapToggles() {
  elements.scopeSegment.classList.toggle("active", state.mapScope === "segment");
  elements.scopeAll.classList.toggle("active", state.mapScope === "all");
}

function renderChipPlane() {
  if (!elements.chipPlane || !elements.chipLinks) return;
  const activeComponents = activeChipComponents();
  const relatedComponents = new Set(activeComponents);

  chipSignalLinks.forEach((link) => {
    const fromComponent = chipEndpointComponent(link.from);
    const toComponent = chipEndpointComponent(link.to);
    if (activeComponents.has(fromComponent) || activeComponents.has(toComponent)) {
      relatedComponents.add(fromComponent);
      relatedComponents.add(toComponent);
    }
  });

  elements.chipPlane.querySelectorAll("[data-chip-component]").forEach((node) => {
    const componentId = node.dataset.chipComponent;
    const isActive = activeComponents.has(componentId);
    const isRelated = relatedComponents.has(componentId);
    const component = chipComponents[componentId];
    const linkedSegments = component?.segments
      .map(segmentById)
      .filter(Boolean)
      .slice(0, 2)
      .map(segmentName)
      .join(state.lang === "en" ? " / " : " / ");
    node.classList.toggle("active", isActive);
    node.classList.toggle("related", !isActive && isRelated);
    node.classList.toggle("dim", !isActive && !isRelated);
    const fullLabel = chipComponentLabel(componentId);
    const detailLabel = linkedSegments || chipComponentKind(componentId);
    node.setAttribute("aria-label", fullLabel);
    node.title = detailLabel ? `${fullLabel} · ${detailLabel}` : fullLabel;
    node.innerHTML = `
      <strong>${escapeHtml(chipComponentShortLabel(componentId))}</strong>
    `;
  });

  elements.chipLinks.innerHTML = chipSignalLinks
    .map((link) => {
      const source = chipNodePoint(link.from);
      const target = chipNodePoint(link.to);
      const fromComponent = chipEndpointComponent(link.from);
      const toComponent = chipEndpointComponent(link.to);
      const active = activeComponents.has(fromComponent) && activeComponents.has(toComponent);
      const related = !active && (activeComponents.has(fromComponent) || activeComponents.has(toComponent));
      const className = active ? "active" : related ? "related" : "";
      return `
        <g>
          <path class="chip-link ${className}" d="${chipLinkPath(source, target)}"></path>
        </g>
      `;
    })
    .join("");
}

function renderPhysicalTeardown() {
  const activeLayer = activePhysicalLayer();
  const segment = activeSegment();
  const preciseSelectors = componentSelectorsBySegment[segment.id] || [];
  const activeSelectors = new Set(preciseSelectors.length ? preciseSelectors : activeLayer.selectors || []);
  const activeCallouts = new Set(activeLayer.callouts);

  document
    .querySelectorAll(".pkg-layer, .gpu-die, .hbm-stack, .fab-source, .board-component, .microbump-field, .bga-field")
    .forEach((node) => {
      const isActive = [...activeSelectors].some((selector) => node.matches(selector));
      const isContext =
        (activeLayer.id === "memory_stack" && node.matches(".top-module")) ||
        (["networking_silicon", "optical_interconnect", "pcb_connectors", "power_management", "cooling_racks"].includes(segment.id) && node.matches(".board-layer"));
      node.classList.toggle("is-active", isActive);
      node.classList.toggle("is-dim", !isActive && !isContext);
    });

  document.querySelectorAll(".callout").forEach((node) => {
    const id = [...node.classList].find((className) => /^c\d+$/.test(className));
    const label = calloutLabels[id];
    const text = node.querySelector("span");
    if (text && label) text.textContent = localPair(label[0], label[1]);
    const isActive = activeCallouts.has(id);
    node.classList.toggle("is-active", isActive);
    node.classList.toggle("is-dim", !isActive);
  });

  elements.chainReality.innerHTML = physicalLayers
    .map((layer) => {
      const active = layer.id === activeLayer.id ? "active" : "";
      const linkedSegment = layer.segments.map(segmentById).find(Boolean);
      const segmentNames = layer.segments
        .map(segmentById)
        .filter(Boolean)
        .slice(0, 3)
        .map(segmentName)
        .join(state.lang === "en" ? ", " : "、");
      return `
        <button class="chain-layer ${active}" type="button" data-chain-segment="${escapeHtml(linkedSegment?.id || "")}">
          <b>${escapeHtml(layer.number)}</b>
          <span>
            <strong>${escapeHtml(physicalLayerName(layer))}</strong>
            <span>${escapeHtml(segmentNames)}</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function networkColor(type) {
  const colors = {
    place: "#0b74ff",
    community: "#23c9a6",
    person: "#f97316",
    company: "#7dd3fc",
    investor: "#f59e0b",
    target: "#a78bfa",
  };
  return colors[type] || "#e2e8f0";
}

function networkNodeTypeLabel(type) {
  return i18n[state.lang].nodeTypes[type] || i18n.zh.nodeTypes[type] || type;
}

function networkNodeLabel(node) {
  return state.lang === "en" ? networkNodeLabelsEn[node.id] || node.label : node.label;
}

function networkEdgeLabel(edge) {
  return state.lang === "en" ? edge[4] || edge[2] : edge[2];
}

function networkTitle(data) {
  return state.lang === "en" ? data.titleEn || data.title : data.title;
}

function networkDescription(data) {
  return state.lang === "en" ? data.descriptionEn || data.description : data.description;
}

function renderNetworkLegend(data) {
  const types = [...new Set(data.edges.map((edge) => edge[3] || state.networkMode))];
  return `
    <div class="network-legend">
      ${types
        .map((type) => {
          const label = edgeLegend[type] || [type, type];
          return `<span class="legend-${escapeHtml(type)}"><i></i>${escapeHtml(localPair(label[0], label[1]))}</span>`;
        })
        .join("")}
    </div>
  `;
}

function renderNetworkSwitch() {
  elements.networkSwitch.innerHTML = networkTabs
    .map(
      ([id, label]) =>
        `<button type="button" class="${state.networkMode === id ? "active" : ""}" data-network="${id}">${escapeHtml(state.lang === "en" ? networkTitle(networkData[id]) : label)}</button>`
    )
    .join("");
}

function networkLayoutLabel(layoutId, fallback) {
  const key = {
    geo: "networkLayoutGeo",
    circle: "networkLayoutCircle",
    columns: "networkLayoutColumns",
  }[layoutId];
  return key ? t(key) : fallback || layoutId;
}

function renderNetworkLayoutSwitch() {
  if (!elements.networkLayoutSwitch) return;
  elements.networkLayoutSwitch.innerHTML = networkLayoutTabs
    .map(
      ([id, label]) =>
        `<button type="button" class="${state.networkLayout === id ? "active" : ""}" data-network-layout="${id}">${escapeHtml(networkLayoutLabel(id, label))}</button>`
    )
    .join("");
}

function networkPositionStorageKey() {
  return `${state.networkMode}:${state.networkLayout}`;
}

function networkCustomPositions() {
  const key = networkPositionStorageKey();
  if (!state.networkPositions[key]) state.networkPositions[key] = {};
  return state.networkPositions[key];
}

function networkGeoPosition(node) {
  const geo = networkGeoNodes[state.networkMode]?.[node.id];
  if (!geo) return { x: node.x, y: node.y };
  return {
    x: 70 + ((geo.lon + 180) / 360) * 960,
    y: 62 + ((90 - geo.lat) / 180) * 496,
  };
}

function networkCirclePositions(data) {
  const typeOrder = {
    place: 0,
    community: 1,
    investor: 2,
    company: 3,
    target: 4,
    person: 5,
  };
  const orderedNodes = [...data.nodes].sort((a, b) => {
    const byType = (typeOrder[a.type] ?? 9) - (typeOrder[b.type] ?? 9);
    if (byType) return byType;
    return networkNodeLabel(a).localeCompare(networkNodeLabel(b), state.lang === "en" ? "en" : "zh-CN");
  });
  const positions = new Map();
  const radiusX = state.networkMode === "origin" ? 380 : 372;
  const radiusY = state.networkMode === "origin" ? 232 : 226;
  const offset = -Math.PI / 2;
  orderedNodes.forEach((node, index) => {
    const angle = offset + (index / Math.max(1, orderedNodes.length)) * Math.PI * 2;
    positions.set(node.id, {
      x: 550 + Math.cos(angle) * radiusX,
      y: 310 + Math.sin(angle) * radiusY,
    });
  });
  return positions;
}

function networkLayoutPositions(data) {
  const custom = networkCustomPositions();
  const positions = new Map();
  if (state.networkLayout === "circle") {
    networkCirclePositions(data).forEach((position, id) => positions.set(id, position));
  } else {
    data.nodes.forEach((node) => {
      positions.set(node.id, state.networkLayout === "geo" ? networkGeoPosition(node) : { x: node.x, y: node.y });
    });
  }

  if (state.networkLayout === "geo") {
    const buckets = new Map();
    data.nodes.forEach((node) => {
      const position = positions.get(node.id);
      if (!position) return;
      const key = `${Math.round(position.x / 34)}:${Math.round(position.y / 34)}`;
      const count = buckets.get(key) || 0;
      buckets.set(key, count + 1);
      if (!count) return;
      const angle = count * 2.3999632297;
      const radius = 17 + count * 5;
      positions.set(node.id, {
        x: clamp(position.x + Math.cos(angle) * radius, 38, 1062),
        y: clamp(position.y + Math.sin(angle) * radius, 38, 582),
      });
    });
  }

  Object.entries(custom).forEach(([id, position]) => {
    if (!positions.has(id)) return;
    positions.set(id, {
      x: clamp(position.x, 38, 1062),
      y: clamp(position.y, 38, 582),
    });
  });

  return positions;
}

function renderNetwork() {
  const data = networkData[state.networkMode] || networkData.origin;
  const nodeById = new Map(data.nodes.map((node) => [node.id, node]));
  const positionById = networkLayoutPositions(data);
  if (!nodeById.has(state.networkNodeId)) state.networkNodeId = data.nodes[0]?.id || "";
  const selected = nodeById.get(state.networkNodeId) || data.nodes[0];

  renderNetworkSwitch();
  renderNetworkLayoutSwitch();

  const edgesHtml = data.edges
    .map((edge) => {
      const [from, to, label, type = state.networkMode] = edge;
      const source = positionById.get(from);
      const target = positionById.get(to);
      if (!source || !target) return "";
      const active = from === selected?.id || to === selected?.id ? "active" : "";
      const midX = (source.x + target.x) / 2;
      const midY = (source.y + target.y) / 2;
      return `
        <g class="network-link ${active}">
          <line class="network-edge edge-${escapeHtml(type)}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}"></line>
          <circle class="edge-dot" cx="${midX}" cy="${midY}" r="${active ? 4 : 2.5}"></circle>
        </g>
      `;
    })
    .join("");

  const nodesHtml = data.nodes
    .map((node) => {
      const active = node.id === selected?.id ? "active" : "";
      const position = positionById.get(node.id) || node;
      return `
        <g class="network-node ${active}" transform="translate(${position.x.toFixed(1)} ${position.y.toFixed(1)})" data-node="${escapeHtml(node.id)}" tabindex="0" role="button" aria-label="${escapeHtml(node.label)}">
          <circle r="${active ? 19 : 15}" fill="${networkColor(node.type)}"></circle>
          <text x="24" y="5">${escapeHtml(networkNodeLabel(node))}</text>
        </g>
      `;
    })
    .join("");

  elements.networkCanvas.innerHTML = `
    <defs>
      <filter id="networkGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="4" result="blur"></feGaussianBlur>
        <feMerge>
          <feMergeNode in="blur"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <rect class="network-backdrop" x="0" y="0" width="1100" height="620" rx="24"></rect>
    ${edgesHtml}
    ${nodesHtml}
  `;

  const links = data.edges.filter(([from, to]) => from === selected?.id || to === selected?.id);
  const linkRows = links
    .map((edge) => {
      const [from, to] = edge;
      const otherId = from === selected?.id ? to : from;
      const other = nodeById.get(otherId);
      return `<div><strong>${escapeHtml(other ? networkNodeLabel(other) : otherId)}</strong><span>${escapeHtml(networkEdgeLabel(edge))}</span></div>`;
    })
    .join("");

  elements.networkInfo.innerHTML = `
    <span class="info-kicker">${escapeHtml(networkTitle(data))}</span>
    <h3>${escapeHtml(selected ? networkNodeLabel(selected) : networkTitle(data))}</h3>
    <p>${escapeHtml(networkDescription(data))}</p>
    <div class="node-meta">
      <span>${escapeHtml(networkNodeTypeLabel(selected?.type))}</span>
      <strong>${links.length} ${escapeHtml(t("relationshipCount"))}</strong>
    </div>
    ${renderNetworkLegend(data)}
    <div class="network-list">${linkRows || `<div>${escapeHtml(t("emptyRelation"))}</div>`}</div>
  `;
}

function renderMiniNetwork() {
  const data = networkData[state.networkMode] || networkData.origin;
  const nodeById = new Map(data.nodes.map((node) => [node.id, node]));
  const positionById = networkLayoutPositions(data);
  const sx = (x) => 20 + (x / 1100) * 420;
  const sy = (y) => 15 + (y / 620) * 160;
  const edges = data.edges
    .map((edge) => {
      const [from, to, , type = state.networkMode] = edge;
      const source = positionById.get(from);
      const target = positionById.get(to);
      if (!source || !target) return "";
      return `<line class="mini-edge edge-${escapeHtml(type)}" x1="${sx(source.x).toFixed(1)}" y1="${sy(source.y).toFixed(1)}" x2="${sx(target.x).toFixed(1)}" y2="${sy(target.y).toFixed(1)}"></line>`;
    })
    .join("");
  const nodes = data.nodes
    .map((node) => {
      const active = node.id === state.networkNodeId ? "active" : "";
      const label = networkNodeLabel(node);
      const position = positionById.get(node.id) || node;
      return `
        <g class="mini-node ${active}" data-node="${escapeHtml(node.id)}" transform="translate(${sx(position.x).toFixed(1)} ${sy(position.y).toFixed(1)})">
          <circle r="${active ? 7 : 5.5}" fill="${networkColor(node.type)}"></circle>
          <text x="8" y="3">${escapeHtml(label.length > 18 ? `${label.slice(0, 17)}…` : label)}</text>
        </g>
      `;
    })
    .join("");
  elements.miniNetwork.innerHTML = `${edges}${nodes}`;
}

function localItemMatches(item, query) {
  if (!query) return true;
  const english = localizationEn[item.component] || {};
  const haystack = [item.component, item.global, item.china, item.status, item.assessment, english.component, english.china, english.assessment]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function localizationText(item, field) {
  if (state.lang === "en") {
    const english = localizationEn[item.component] || {};
    if (field === "component") return english.component || item.component;
    if (field === "china") return english.china || item.china;
    if (field === "assessment") return english.assessment || item.assessment;
  }
  return item[field];
}

function renderLocalizationFilters() {
  const counts = localizationData.reduce(
    (acc, item) => {
      acc.all += 1;
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    },
    { all: 0 }
  );
  elements.localizationFilters.innerHTML = localizationTabs
    .map(([id, label]) => {
      const count = counts[id] || 0;
      return `<button type="button" class="${state.localizationStatus === id ? "active" : ""}" data-status="${escapeHtml(id)}">${escapeHtml(statusLabel(id))} <span>${count}</span></button>`;
    })
    .join("");
}

function renderLocalization() {
  renderLocalizationFilters();
  const query = normalize(state.query.trim());
  const items = localizationData.filter((item) => {
    const statusMatch = state.localizationStatus === "all" || item.status === state.localizationStatus;
    return statusMatch && localItemMatches(item, query);
  });

  if (!items.length) {
    elements.localizationGrid.innerHTML = `<div class="empty-state">${escapeHtml(t("noLocalization"))}</div>`;
    return;
  }

  elements.localizationGrid.innerHTML = items
    .map((item) => {
      const sources = item.sources
        .map(
          ([label, href]) =>
            `<a href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`
        )
        .join("");
      return `
        <article class="local-card" data-status="${escapeHtml(item.status)}">
          <span class="status">${escapeHtml(statusLabel(item.status))}</span>
          <h3>${escapeHtml(localizationText(item, "component"))}</h3>
          <div class="compare-row">
            <div><span>${escapeHtml(t("globalPlayers"))}</span><strong>${escapeHtml(item.global)}</strong></div>
            <div><span>${escapeHtml(t("chinaPlayers"))}</span><strong>${escapeHtml(localizationText(item, "china"))}</strong></div>
          </div>
          <p>${escapeHtml(localizationText(item, "assessment"))}</p>
          <div class="local-source">${sources}</div>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderChromeText();
  renderLanguageToggle();
  renderViewToggle();
  renderMapProjectionToggle();
  renderVisibility();
  renderLayerTabs();
  renderSegments();
  renderPlayers();
  renderExtraction();
  renderChipPlane();
  renderPhysicalTeardown();
  renderSubLayers();
  renderThirdLayers();
  renderMapToggles();
  renderMapBase();
  renderMapNetwork();
  renderMarkers();
  renderCompanyCard();
  renderNetwork();
  renderMiniNetwork();
  renderLocalization();
}

function networkCanvasPoint(event) {
  const svg = elements.networkCanvas;
  const matrix = svg.getScreenCTM?.();
  if (!matrix) return { x: 0, y: 0 };
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  return point.matrixTransform(matrix.inverse());
}

function startNetworkDrag(event) {
  const node = event.target.closest("[data-node]");
  if (!node || !elements.networkCanvas.contains(node)) return;
  const data = networkData[state.networkMode] || networkData.origin;
  const position = networkLayoutPositions(data).get(node.dataset.node);
  if (!position) return;
  const point = networkCanvasPoint(event);
  state.networkNodeId = node.dataset.node;
  networkDrag = {
    id: node.dataset.node,
    dx: position.x - point.x,
    dy: position.y - point.y,
    moved: false,
  };
  elements.networkCanvas.setPointerCapture?.(event.pointerId);
  renderNetwork();
  renderMiniNetwork();
}

function moveNetworkDrag(event) {
  if (!networkDrag) return;
  event.preventDefault();
  const point = networkCanvasPoint(event);
  const next = {
    x: clamp(point.x + networkDrag.dx, 38, 1062),
    y: clamp(point.y + networkDrag.dy, 38, 582),
  };
  const custom = networkCustomPositions();
  const previous = custom[networkDrag.id];
  if (previous && Math.hypot(previous.x - next.x, previous.y - next.y) < 0.5) return;
  custom[networkDrag.id] = next;
  networkDrag.moved = true;
  renderNetwork();
  renderMiniNetwork();
}

function endNetworkDrag(event) {
  if (!networkDrag) return;
  suppressNetworkClick = networkDrag.moved;
  networkDrag = null;
  elements.networkCanvas.releasePointerCapture?.(event.pointerId);
  if (suppressNetworkClick) {
    window.setTimeout(() => {
      suppressNetworkClick = false;
    }, 0);
  }
}

elements.langToggle.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-lang]");
  if (!button) return;
  state.lang = button.dataset.lang;
  lastFlightKey = "";
  render();
});

elements.viewToggle.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-view]");
  if (!button) return;
  state.view = button.dataset.view;
  render();
});

elements.layerTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-layer]");
  if (!button) return;
  state.layer = button.dataset.layer;
  const shown = filteredSegments();
  if (shown.length && !shown.some((segment) => segment.id === state.segmentId)) {
    state.segmentId = shown[0].id;
    state.companyId = shown[0].players[0];
    state.partIndex = -1;
  }
  render();
});

elements.segmentGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-segment]");
  if (!button) return;
  const segment = segments.find((item) => item.id === button.dataset.segment);
  if (!segment) return;
  state.segmentId = segment.id;
  state.companyId = segment.players[0];
  state.partIndex = -1;
  render();
});

elements.chipPlane.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-chip-component]");
  if (!button) return;
  const segment = componentPrimarySegment(button.dataset.chipComponent);
  if (!segment) return;
  state.segmentId = segment.id;
  state.companyId = segment.players[0];
  state.partIndex = -1;
  render();
});

elements.playerList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-company]");
  if (!button) return;
  state.companyId = button.dataset.company;
  render();
});

elements.subLayerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-part]");
  if (!button) return;
  state.partIndex = Number(button.dataset.part);
  render();
});

elements.partCard.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-company]");
  if (!button) return;
  state.companyId = button.dataset.company;
  render();
});

elements.thirdLayerGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-company]");
  if (!button) return;
  state.companyId = button.dataset.company;
  render();
});

elements.resetPart.addEventListener("click", () => {
  state.partIndex = -1;
  render();
});

elements.mapMarkers.addEventListener("click", (event) => {
  const marker = event.target.closest("[data-company]");
  if (!marker) return;
  state.companyId = marker.dataset.company;
  const linkedSegment = segments.find((segment) => segment.players.includes(state.companyId));
  if (linkedSegment && state.mapScope === "segment" && !activeSegment().players.includes(state.companyId)) {
    state.segmentId = linkedSegment.id;
    state.partIndex = -1;
  }
  render();
});

elements.mapMarkers.addEventListener("mousemove", (event) => {
  const marker = event.target.closest("[data-company]");
  if (!marker) return;
  showMapTooltip(marker.dataset.company, event);
});

elements.mapMarkers.addEventListener("mouseleave", () => {
  hideMapTooltip();
});

elements.mapMarkers.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const marker = event.target.closest("[data-company]");
  if (!marker) return;
  event.preventDefault();
  state.companyId = marker.dataset.company;
  render();
});

elements.openNetworkView.addEventListener("click", () => {
  state.view = "network";
  render();
});

elements.miniNetwork.addEventListener("click", (event) => {
  const node = event.target.closest("[data-node]");
  if (node) state.networkNodeId = node.dataset.node;
  state.view = "network";
  render();
});

elements.scopeSegment.addEventListener("click", () => {
  state.mapScope = "segment";
  render();
});

elements.scopeAll.addEventListener("click", () => {
  state.mapScope = "all";
  render();
});

elements.mapProjectionToggle.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-map-projection]");
  if (!button) return;
  state.mapProjection = button.dataset.mapProjection;
  render();
});

elements.globeControls.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-globe-control]");
  if (!button) return;
  if (button.dataset.globeControl === "zoom-in") setGlobeZoom(state.globeZoom * 1.18);
  if (button.dataset.globeControl === "zoom-out") setGlobeZoom(state.globeZoom / 1.18);
  if (button.dataset.globeControl === "reset") {
    state.globeLon = 18;
    state.globeLat = 20;
    state.globeZoom = 1;
    state.mapProjection = "globe";
    renderMapViewport();
  }
});

elements.worldMap.addEventListener("wheel", (event) => {
  if (state.mapProjection !== "globe") return;
  event.preventDefault();
  const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
  setGlobeZoom(state.globeZoom * factor);
});

elements.worldMap.addEventListener("pointerdown", (event) => {
  if (state.mapProjection !== "globe") return;
  globeDrag = {
    x: event.clientX,
    y: event.clientY,
    lon: state.globeLon,
    lat: state.globeLat,
  };
  elements.worldMap.setPointerCapture?.(event.pointerId);
});

elements.worldMap.addEventListener("pointermove", (event) => {
  if (!globeDrag || state.mapProjection !== "globe") return;
  const dx = event.clientX - globeDrag.x;
  const dy = event.clientY - globeDrag.y;
  state.globeLon = ((globeDrag.lon - dx * 0.35 + 540) % 360) - 180;
  state.globeLat = clamp(globeDrag.lat + dy * 0.28, -70, 70);
  renderMapViewport();
});

elements.worldMap.addEventListener("pointerup", (event) => {
  globeDrag = null;
  elements.worldMap.releasePointerCapture?.(event.pointerId);
});

elements.worldMap.addEventListener("pointerleave", () => {
  globeDrag = null;
});

elements.mapNetwork.addEventListener("click", (event) => {
  const node = event.target.closest("[data-node]");
  if (!node) return;
  state.networkNodeId = node.dataset.node;
  renderMapNetwork();
  renderMiniNetwork();
  renderNetwork();
});

elements.chainReality.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-chain-segment]");
  if (!button || !button.dataset.chainSegment) return;
  const segment = segmentById(button.dataset.chainSegment);
  if (!segment) return;
  state.segmentId = segment.id;
  state.companyId = segment.players[0];
  state.partIndex = -1;
  render();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  const ids = visibleCompanyIds();
  if (state.query.trim() && ids.length && !ids.includes(state.companyId)) {
    state.companyId = ids[0];
    const linkedSegment = segments.find((segment) => segment.players.includes(state.companyId));
    if (linkedSegment) {
      state.segmentId = linkedSegment.id;
      state.partIndex = -1;
    }
  }
  render();
});

elements.networkSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-network]");
  if (!button) return;
  state.networkMode = button.dataset.network;
  state.networkNodeId = networkData[state.networkMode]?.nodes[0]?.id || "";
  render();
});

elements.networkLayoutSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-network-layout]");
  if (!button) return;
  state.networkLayout = button.dataset.networkLayout;
  renderNetwork();
  renderMiniNetwork();
});

elements.networkCanvas.addEventListener("pointerdown", startNetworkDrag);
elements.networkCanvas.addEventListener("pointermove", moveNetworkDrag);
elements.networkCanvas.addEventListener("pointerup", endNetworkDrag);
elements.networkCanvas.addEventListener("pointercancel", endNetworkDrag);
elements.networkCanvas.addEventListener("pointerleave", endNetworkDrag);

elements.networkCanvas.addEventListener("click", (event) => {
  if (suppressNetworkClick) return;
  const node = event.target.closest("[data-node]");
  if (!node) return;
  state.networkNodeId = node.dataset.node;
  render();
});

elements.networkCanvas.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const node = event.target.closest("[data-node]");
  if (!node) return;
  event.preventDefault();
  state.networkNodeId = node.dataset.node;
  render();
});

elements.localizationFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-status]");
  if (!button) return;
  state.localizationStatus = button.dataset.status;
  render();
});

render();
