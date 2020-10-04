export class CatC {
  round: number;
  hungerPoint: number;
  reaction: string;
  coefficient: number;
  anger: boolean;
  constructor() {
    this.round = 0;
    this.hungerPoint = 0;
    this.reaction = "😽まだ大丈夫";
    this.coefficient = 1;
    this.anger = false;
  }
  reply(): string {
    if (this.hungerPoint >= 100) {
      this.reaction = "💥暴れる";
      this.anger = true; // 暴れ始めるのはhungerPointが100以上になったその時ではなく、100以上になったことを確認した時。
    } else if (this.hungerPoint >= 60) {
      this.reaction = "😿ハラヘリ";
    }
    return this.reaction;
  }
  eatSnack(): number | void {
    if (!this.anger)
      return (this.hungerPoint = Math.max((this.hungerPoint -= 40), 0));
    else return this.hungerPoint;
  }
  eatTuna(): number | void {
    if (!this.anger) return (this.hungerPoint = 0);
    else return this.hungerPoint;
  }
  play(): number {
    this.round++;
    return (this.hungerPoint += 10 * this.coefficient);
  }
}
