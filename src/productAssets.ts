import type { Product } from './constants';

export type ProductAssetOverride = Partial<Pick<
  Product,
  | 'image'
  | 'diagramImage'
  | 'diagramNote'
  | 'topViewImage'
  | 'topViewNote'
  | 'subtitle'
  | 'specs'
  | 'features'
  | 'technicalData'
>>;

export const PRODUCT_ASSETS: Record<string, ProductAssetOverride> = {
  // Add or replace HD product assets here. The key must match the product id in constants.ts.
  // Put files in public/products/... and reference them with paths that start at /products/.
  mlpvl: {
    image: '/products/Hydraullic cylinder/1. MLPVL Pan Cake Jacks.png',
    diagramImage: '/products/pencil_sketch/MLPVL Pan Cake Jacks sketch',
  },
  mltvl: {
    image: '/products/Hydraullic cylinder/2. MLTVL Pancake Jacks.png',
    diagramImage: '/products/pencil_sketch/MLTVL Pancake Jacks sketch.png',
    technicalData: {
      headers: ['Rated capacity (ton)', 'Capacity @ 700 bar (kN)', 'Stroke (mm)', 'Model', 'Effective area (cm²)', 'Oil cap. (cc)', 'Closed height (mm)', 'Cylinder OD (mm)', 'Bore dia. (mm)', 'Ram dia. (mm)', 'Saddle dia. (mm)', 'Saddle max. tilt angle', 'Wt. (Approx.) (kg)'],
      rows: [
        ['50', '550', '50', 'MLTVL 50-50', '78.5', '393', '125', '140', '100', '100', '90', '5°', '15.0'],
        ['100', '1077', '50', 'MLTVL 100-50', '153.9', '770', '140', '180', '140', '140', '125', '5°', '28.5'],
        ['150', '1589', '45', 'MLTVL 150-45', '227.0', '1022', '150', '220', '170', '170', '160', '5°', '44.0'],
        ['200', '2199', '45', 'MLTVL 200-45', '314.2', '1414', '155', '255', '200', '200', '180', '5°', '61.0'],
        ['250', '2661', '45', 'MLTVL 250-45', '380.1', '1710', '160', '280', '220', '220', '200', '5°', '76.0'],
        ['300', '3167', '45', 'MLTVL 300-45', '452.4', '2036', '170', '310', '240', '240', '220', '4°', '99.0'],
        ['400', '4008', '45', 'MLTVL 400-45', '572.6', '2577', '180', '350', '270', '270', '250', '4°', '130.0'],
        ['500', '4948', '45', 'MLTVL 500-45', '706.9', '3181', '195', '400', '300', '300', '290', '3°', '185.0'],
        ['800', '7939', '45', 'MLTVL 800-45', '1134.1', '5104', '245', '505', '380', '380', '340', '3°', '369.0'],
        ['1000', '9930', '45', 'MLTVL 1000-45', '1418.6', '6384', '260', '560', '425', '425', '380', '3°', '477.0'],
        ['1200', '12405', '45', 'MLTVL 1200-45', '1772.1', '7974', '280', '600', '475', '475', '400', '3°', '597.0']
      ]
    },
  },
  'msf-flat': {
    image: '/products/Hydraullic cylinder/3. MSF Flat Jacks.png',
    diagramImage: '/products/pencil_sketch/MSF Flat Jack sketch.png',
    technicalData: {
      headers: ['Rated capacity (ton)', 'Capacity @ 700 bar (kN)', 'Stroke (mm)', 'Model', 'Effective area (cm²)', 'Oil cap. (cc)', 'Closed height (mm)', 'Cylinder OD (mm)', 'Bore dia. (mm)', 'Ram dia. (mm)', 'A/F', 'Wt. (Approx.) (kg)'],
      rows: [
        ['5', '56', '8', 'MSF 5-8', '8.0', '6', '35', '60', '32', '20', '45', '0.6'],
        ['10', '111', '12', 'MSF 10-12', '15.9', '19', '45', '80', '45', '35', '60', '1.3'],
        ['20', '218', '12', 'MSF 20-12', '31.2', '37', '55', '100', '63', '50', '80', '2.6'],
        ['30', '309', '12', 'MSF 30-12', '44.2', '53', '60', '115', '75', '60', '95', '3.8'],
        ['50', '550', '16', 'MSF 50-16', '78.5', '126', '65', '140', '100', '70', '120', '6.2'],
        ['75', '792', '16', 'MSF 75-16', '113.1', '180', '80', '175', '120', '85', '145', '11.8'],
        ['100', '1077', '16', 'MSF 100-16', '153.9', '247', '85', '190', '140', '100', '165', '15.1'],
        ['150', '1589', '16', 'MSF 150-16', '227.0', '363', '100', '230', '170', '120', '205', '27.0'],
        ['200', '1985', '16', 'MSF 200-16', '283.5', '454', '115', '265', '190', '140', '230', '40.7']
      ]
    },
  },
  msl: {
    image: '/products/Hydraullic cylinder/4. MSL Low Height Jacks.png',
    diagramImage: '/products/pencil_sketch/MSL Low Height Jacks sketch.png',
    technicalData: {
      headers: ['Rated capacity (ton)', 'Capacity @ 700 bar (kN)', 'Stroke (mm)', 'Model', 'Effective area (cm²)', 'Oil cap. (cc)', 'Closed height (mm)', 'Cylinder OD (mm)', 'Bore dia. (mm)', 'Ram dia. (mm)', 'Saddle dia. (mm)', 'Wt. (Approx.) (kg)'],
      rows: [
        ['10', '111', '30', 'MSL 10-30', '15.9', '48', '90', '70', '45', '35', '-', '2.3'],
        ['20', '218', '50', 'MSL 20-50', '31.2', '160', '115', '90', '63', '50', '-', '4.9'],
        ['30', '309', '50', 'MSL 30-50', '44.2', '221', '120', '100', '75', '60', '-', '6.0'],
        ['50', '550', '60', 'MSL 50-60', '78.5', '471', '125', '130', '100', '80', '60', '11.0'],
        ['75', '792', '60', 'MSL 75-60', '113.1', '679', '145', '155', '120', '95', '70', '18.4'],
        ['100', '1077', '60', 'MSL 100-60', '153.9', '925', '150', '180', '140', '110', '80', '23.6'],
        ['150', '1589', '60', 'MSL 150-60', '227.0', '1362', '165', '220', '170', '140', '100', '43.0'],
        ['200', '2199', '60', 'MSL 200-60', '314.2', '1885', '200', '255', '200', '160', '110', '66.0']
      ]
    },
  },
  msls: {
    image: '/products/Hydraullic cylinder/5. MSLS Low Height Jacks.png',
  },
  msp: {
    image: '/products/Hydraullic cylinder/6. MSP General Purpose Jacks .png',
  },
  msps: {
    image: '/products/Hydraullic cylinder/7. MSPS General Purpose Jacks .png',
  },
  mspu: {
    image: '/products/Hydraullic cylinder/8. MSPU General Purpose Jacks .png',
  },
  mlps: {
    image: '/products/Hydraullic cylinder/9. MLPS High Tonnage Jacks.png',
  },
  mst: {
    image: '/products/Hydraullic cylinder/10. MST General Purpose Jacks .png',
  },
  msts: {
    image: '/products/Hydraullic cylinder/11. MSTS General Purpose Jacks .png',
  },
  mlts: {
    image: '/products/Hydraullic cylinder/12. MLTS High Tonnage Jacks .png',
  },
  mdp: {
    image: '/products/Hydraullic cylinder/13. MDP Multipurpose Jacks .png',
  },
  mdps: {
    image: '/products/Hydraullic cylinder/14. MDPS Multipurpose Jacks .png',
  },
};
