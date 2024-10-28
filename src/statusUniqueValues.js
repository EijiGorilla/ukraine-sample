export const statusHospitalLabel = [
  'Total Destruction',
  'Damaged beyond repair',
  'Serious damage - non-repairable',
  'Serious damage - repairable',
  'No damage',
];

// export const statusLotColor = ['#00734d', '#0070ff', '#ffff00', '#ffaa00', '#ff0000'];
export const statusHospitalColor = [
  [255, 0, 0, 1],
  [197, 0, 255, 1],
  '#e8ff00', //#f9ff5aff',
  [255, 170, 0, 1],
  [169, 169, 169, 0.5],
];

export const statusHospitalColorHex = ['#FF0000', '#C500FF', '#e8ff00', '#FFAA00', '#A9A9A9'];

export const statusHospitalQuery = statusHospitalLabel.map((status, index) => {
  return Object.assign({
    category: status,
    value: index + 1,
    color: statusHospitalColor[index],
  });
});

export const hospitalColorRestoration = ['#ff2638ff', '#e8ff00', '#1993ffff'];

// title, label, and value color
export const primaryLabelColor = '#9ca3af';
export const valueLabelColor = '#d1d5db';
