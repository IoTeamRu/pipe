const pipeType = {
  features: [
    { value: 100, description: "ХВС" },
    { value: 101, description: "ГВС" },
    { value: 200, description: "Газ" },
    { value: 300, description: "Пожаротушение" },
    { value: 999, description: "Other" },
  ],
};


const terrainHeight = {
  conditions: [
    { height: 40 },
    { height: 20 },
    { height: 10 },
    { height: 0 },
    { height: -5 },
    { height: -10 },
  ],
};

export { pipeType, terrainHeight };
