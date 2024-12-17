interface History {
  heading: string;
  experiences: Experience[];
}

interface Experience {
  name: string;
  location: string;
  positions: Position[];
}

interface Position {
  title: string;
  timespan: string;
  description: string[];
}
