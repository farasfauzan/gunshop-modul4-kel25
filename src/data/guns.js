const GUNS = [
  {
    name: 'Glock 17',
    type: 'Pistol',
    caliber: '9mm',
    price: 599,
    image: '/guns/pistol.svg',
    description:
      'The duty pistol everything else is measured against. Polymer frame, 17-round magazine, striker-fired trigger. Safe, boring, and it always goes bang.',
  },
  {
    name: 'AK-47',
    type: 'Rifle',
    caliber: '7.62mm',
    price: 899,
    image: '/guns/rifle.svg',
    description:
      'Gas-operated, loose tolerances, and famously indifferent to mud. Seven decades of service and still the benchmark for a rifle that will not quit.',
  },
  {
    name: 'Remington 870',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 449,
    image: '/guns/shotgun.svg',
    description:
      'Pump-action workhorse. Five shells in the tube, a receiver that has taken more abuse than most trucks, and a sound that ends arguments.',
  },
  {
    name: 'AR-15',
    type: 'Rifle',
    caliber: '5.56mm',
    price: 799,
    image: '/guns/rifle.svg',
    description:
      'Light-recoiling, endlessly modular, and accurate well past the range most shooters can hold. The platform you can rebuild with one tool.',
  },
  {
    name: 'Desert Eagle',
    type: 'Pistol',
    caliber: '.50 AE',
    price: 1599,
    image: '/guns/pistol.svg',
    description:
      'Gas-operated hand cannon. Three and a half pounds of chromed steel that fires a round most pistols would refuse. Subtle it is not.',
  },
  {
    name: 'Mossberg 500',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 399,
    image: '/guns/shotgun.svg',
    description:
      'The other pump gun. Twin action bars, a simple safety on the tang, and a price that leaves money for ammunition.',
  },
  {
    name: 'Lee-Enfield Mk III',
    type: 'Rifle',
    caliber: '.303 British',
    price: 549,
    image: '/guns/lee-enfield.jpg',
    description:
      'The British service rifle for most of the twentieth century. Ten-round magazine, a bolt you can shoulder and ride, and a reputation for being indestructible in hands that were not always careful.',
    credit: {
      author: 'Armémuseum (Swedish Army Museum)',
      license: 'CC BY-SA 3.0',
      url: 'https://commons.wikimedia.org/wiki/File:Lee-Enfield_Mk_III_(No_1_Mk_3)_AM032056_noBG.png',
    },
  },
  {
    name: 'Winchester Model 1897',
    type: 'Shotgun',
    caliber: '12 Gauge',
    price: 699,
    image: '/guns/winchester-1897.jpg',
    description:
      'The trench gun. Built for a war fought from holes in the ground, and still the smoothest-handling pump that ever came off that line. Walnut furniture, exposed hammer, no apologies.',
    credit: {
      author: 'National Park Service — Hot Springs National Park',
      license: 'Public domain',
      url: 'https://commons.wikimedia.org/wiki/File:12_gauge_shotgun,_pump_type,_model_1897_Winchester;_Exposed_hammer;_reddish_hardwood_(possibly_cherry)_butt_stock;_pump_handle_(e5a4ca9b-5577-4977-9e81-821214b9c52d).jpg',
    },
  },
  {
    name: 'Walther P38N',
    type: 'Pistol',
    caliber: '9mm',
    price: 629,
    image: '/guns/walther-p38n.jpg',
    description:
      'A locked-brock pistol that stayed in production long after it stopped making sense. Field-strip in four moves, decocker instead of a safety, and a grip that fits a cold hand.',
    credit: {
      author: 'Askild Antonsen',
      license: 'CC BY 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Walther_P38N_(6825680204).jpg',
    },
  },
]

export default GUNS
