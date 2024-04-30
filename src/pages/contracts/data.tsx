// data.tsx



interface Contract {
  id: number;
  title: string;
  discount: number;
}

export const records: Contract[] = [
  {
    id: 1,
    title: "Contract A",
    discount: 10,
  },
  {
    id: 2,
    title: "Contract B",
    discount: 20,
  },
 
];
