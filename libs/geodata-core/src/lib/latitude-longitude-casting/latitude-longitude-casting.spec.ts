import {latitudeLongitudeCasting} from "./latitude-longitude-casting";

describe('latitudeLongitudeCasting', () => {
  it('should throw an error when typing is ignored by the user', () => {
    const transform = () => latitudeLongitudeCasting('' as unknown as number[]);
    expect(transform).toThrow(Error)
  });

  it('should return an empty array when nothing is passed', () => {
    const transform = latitudeLongitudeCasting([]);
    expect(transform).toEqual([]);
  });

  describe('Punt 1D', () => {
    const netherlands = [52.379189, 4.899431];
    const america =  [40.712776, -74.005974];
    const australia = [-33.868820, 151.209296];

    it('should transform the dutch coordinates in 1D', () => {
      const transform = latitudeLongitudeCasting(netherlands);
      expect(transform).toStrictEqual([4.899431, 52.379189])
    });

    it('should transform the american coordinates in 1D', () => {
      const transform = latitudeLongitudeCasting(america);
      expect(transform).toStrictEqual([-74.005974, 40.712776])
    });

    it('should transform the australian coordinates in 1D', () => {
      const transform = latitudeLongitudeCasting(australia);
      expect(transform).toStrictEqual([151.209296, -33.868820])
    });

  });

  describe('Polygon 2D', () => {
    const france = [[48.856613, 2.352222], [48.858093, 2.294694], [48.860611, 2.337644]];
    const japan = [[35.689487, 139.691711], [35.710063, 139.8107], [35.676192, 139.650311]];
    const america = [[34.052235, -118.243683], [34.134115, -118.321548], [33.941589, -118.40853]];

    it('should transform the france coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(france);
      expect(transform).toStrictEqual([[2.352222, 48.856613], [2.294694, 48.858093], [2.337644, 48.860611]]);
    });

    it('should transform the japanees coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(japan);
      expect(transform).toStrictEqual([[139.691711, 35.689487], [139.8107, 35.710063], [139.650311, 35.676192]]);
    });

    it('should transform the american coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(america);
      expect(transform).toStrictEqual([[-118.243683, 34.052235], [-118.321548, 34.134115], [-118.40853, 33.941589]]);
    });
  });

  describe('Polygon', () => {
    const united_kingdom = [
      [[51.507351, -0.127758], [51.500729, -0.124625], [51.515419, -0.141099]],
      [[51.509865, -0.118092], [51.503399, -0.119519], [51.497494, -0.1357]]
    ];

    const russia = [
      [[55.755825, 37.617298], [55.752023, 37.617499], [55.760241, 37.618423] ],
      [[59.934280, 30.335099], [59.939095, 30.315868], [59.956, 30.318]]
    ];

    const brazil = [
      [[-23.55052, -46.633308], [-22.906847, -43.172897], [-25.428356, -49.273251]],
      [[-34.603722, -58.381592], [-33.448891, -70.669266], [-12.046374, -77.042793]]
    ];

    it('should transform the united kingdom coordinates in 3D', () => {
      const transform = latitudeLongitudeCasting(united_kingdom);
      expect(transform).toStrictEqual([
        [[-0.127758, 51.507351], [-0.124625, 51.500729], [-0.141099, 51.515419]],
        [[-0.118092, 51.509865], [-0.119519, 51.503399], [-0.1357, 51.497494]]
      ]);
    });

    it('should transform the russian coordinates in 3D', () => {
      const transform = latitudeLongitudeCasting(russia);
      expect(transform).toStrictEqual([
        [[37.617298, 55.755825], [37.617499, 55.752023], [37.618423, 55.760241]],
        [[30.335099, 59.934280], [30.315868, 59.939095], [30.318, 59.956]]
      ]);
    });

    it('should transform the brazil coordinates in 3D', () => {
      const transform = latitudeLongitudeCasting(brazil);
      expect(transform).toStrictEqual([
        [[-46.633308, -23.55052], [-43.172897, -22.906847], [-49.273251, -25.428356]],
        [[-58.381592, -34.603722], [-70.669266, -33.448891], [-77.042793, -12.046374]]
      ]);
    });
  });

  describe('Multipolygon', () => {
    const france = [[[[48.856613, 2.352222], [48.858093, 2.294694], [48.860611, 2.337644]]]];
    const japan = [[[[35.689487, 139.691711], [35.710063, 139.8107], [35.676192, 139.650311]]]];
    const america = [[[[34.052235, -118.243683], [34.134115, -118.321548], [33.941589, -118.40853]]]];

    it('should transform the france coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(france);
      expect(transform).toStrictEqual([[[[2.352222, 48.856613], [2.294694, 48.858093], [2.337644, 48.860611]]]]);
    });

    it('should transform the japanees coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(japan);
      expect(transform).toStrictEqual([[[[139.691711, 35.689487], [139.8107, 35.710063], [139.650311, 35.676192]]]]);
    });

    it('should transform the american coordinates in 2D', () => {
      const transform = latitudeLongitudeCasting(america);
      expect(transform).toStrictEqual([[[[-118.243683, 34.052235], [-118.321548, 34.134115], [-118.40853, 33.941589]]]]);
    });
  });

  describe('Multipolygon with enclaves', () => {
    const gemeenteVeere = [
      [
        [
          [
            3.718797312749321,
            51.65033140866423
          ],
          [
            3.718797312749321,
            51.65033140866423
          ]
        ]
      ],
      [
        [
          [
            3.683207765764666,
            51.600786050677954
          ],
          [
            3.683207765764666,
            51.600786050677954
          ]
        ]
      ],
      [
        [
          [
            3.63362562331464,
            51.589339743688036
          ],
          [
            3.629744818092722,
            51.58958079615639
          ],
          [
            3.629814183119434,
            51.58835369820563
          ],
          [
            3.63362562331464,
            51.589339743688036
          ]
        ]
      ],
      [
        [
          [
            3.70133364273185,
            51.6439884451799
          ],
          [
            3.697230380850813,
            51.64130048153025
          ],
          [
            3.70133364273185,
            51.6439884451799
          ]
        ]
      ],
      [
        [
          [
            3.681674108832073,
            51.61742861324761
          ],
          [
            3.681674108832073,
            51.61742861324761
          ]
        ]
      ]
    ];

    it('should transform the enclave coordinates', () => {
      const transform = latitudeLongitudeCasting(gemeenteVeere);
      expect(transform).toStrictEqual([
        [
          [
            [
              51.65033140866423,
              3.718797312749321
            ],
            [
              51.65033140866423,
              3.718797312749321
            ]
          ]
        ],
        [
          [
            [
              51.600786050677954,
              3.683207765764666
            ],
            [
              51.600786050677954,
              3.683207765764666
            ]
          ]
        ],
        [
          [
            [
              51.589339743688036,
              3.63362562331464
            ],
            [
              51.58958079615639,
              3.629744818092722
            ],
            [
              51.58835369820563,
              3.629814183119434
            ],
            [
              51.589339743688036,
              3.63362562331464
            ]
          ]
        ],
        [
          [
            [
              51.6439884451799,
              3.70133364273185
            ],
            [
              51.64130048153025,
              3.697230380850813
            ],
            [
              51.6439884451799,
              3.70133364273185
            ]
          ]
        ],
        [
          [
            [
              51.61742861324761,
              3.681674108832073
            ],
            [
              51.61742861324761,
              3.681674108832073
            ]
          ]
        ]
      ]);
    });
  });
});
