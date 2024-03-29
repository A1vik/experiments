interface Rect {
  readonly id: string,
  color?: string, // не обязательный параметр?
  size: {
    width: number,
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '12',
  size: {
    width: 10,
    height: 20
  }
}

rect2.color = 'black';
// rect2.id = '123'; err, because readonly

const rect3 = {} as Rect;
const rect4 = <Rect>{}; // old

// ************** Inheritance

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5 = {
  id: '321',
  size: {
    width: 15,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// ==========

interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date
  };
}

// =========

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}

