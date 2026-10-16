export const COVERED_AREAS = [
  { name: 'Nottingham City Centre', postcode: 'NG1', zone: 'Primary', freeTravel: true },
  { name: 'West Bridgford', postcode: 'NG2', zone: 'Primary', freeTravel: true },
  { name: 'Beeston', postcode: 'NG9', zone: 'Primary', freeTravel: true },
  { name: 'Arnold', postcode: 'NG5', zone: 'Primary', freeTravel: true },
  { name: 'Long Eaton', postcode: 'NG10', zone: 'Primary', freeTravel: true },
  { name: 'Hucknall', postcode: 'NG15', zone: 'Primary', freeTravel: true },
  { name: 'Derby', postcode: 'DE1 - DE24', zone: 'Extended', freeTravel: true },
  { name: 'Ilkeston', postcode: 'DE7', zone: 'Primary', freeTravel: true },
  { name: 'Castle Donington', postcode: 'DE74', zone: 'Primary', freeTravel: true },
  { name: 'Carlton & Netherfield', postcode: 'NG4', zone: 'Primary', freeTravel: true },
  { name: 'Wollaton & Bramcote', postcode: 'NG8', zone: 'Primary', freeTravel: true },
  { name: 'Bingham & Radcliffe', postcode: 'NG12', zone: 'Primary', freeTravel: true },
];

export const POSTCODE_PREFIXES = {
  // Free standard travel
  primary: [
    'NG1', 'NG2', 'NG3', 'NG4', 'NG5', 'NG6', 'NG7', 'NG8', 'NG9',
    'NG10', 'NG11', 'NG12', 'NG13', 'NG14', 'NG15', 'NG16',
    'DE7', 'DE72', 'DE74', 'DE21', 'DE24'
  ],
  // Extended areas (covered with prior confirmation)
  extended: [
    'NG17', 'NG18', 'NG19', 'NG20', 'NG21', 'NG22', 'NG23', 'NG24', 'NG25',
    'DE1', 'DE3', 'DE22', 'DE23', 'LE11', 'LE12'
  ]
};
