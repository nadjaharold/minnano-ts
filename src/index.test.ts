import { CatC } from "./catC";
import { CatKyan } from "./catKyan";

// jest.mock()によってクラス全体をモック化。
jest.mock("./catC"); // パスを指定
const CatCMock = CatC as jest.Mock; // TypeScriptでは型変換する必要がある

describe("しーちゃんのテスト", () => {
  test("CatC: クラス丸ごとモックになっているか", () => {
    // mockImplementationOnceで実装したいクラスを設定する
    CatCMock.mockImplementationOnce(() => {
      return {
        round: 0,
        hungerPoint: 0,
        reaction: "😽まだ大丈夫",
        coefficient: 1,
        anger: false,
        reply(): string {
          if (this.hungerPoint >= 100) {
            this.reaction = "💥暴れる";
            this.anger = true;
          } else if (this.hungerPoint >= 60) {
            this.reaction = "😿ハラヘリ";
          }
          return this.reaction;
        },
        eatSnack(): number | void {
          if (!this.anger)
            return (this.hungerPoint = Math.max((this.hungerPoint -= 40), 0));
        },
        eatTuna(): number | void {
          if (!this.anger) return (this.hungerPoint = 0);
        },
        play(): number {
          this.round++;
          return (this.hungerPoint += 10 * this.coefficient);
        },
      };
    });

    const catC = new CatC();
    expect(CatCMock).toHaveBeenCalled();
    /* * * * * * * * * * * * * * * * * * * * */
    // 初期化処理が正しく行われているか。
    expect(catC.round).toBe(0);
    expect(catC.hungerPoint).toBe(0);
    expect(catC.reaction).toBe("😽まだ大丈夫");
    expect(catC.coefficient).toBe(1);
    expect(catC.anger).toBe(false);
    /* * * * * * * * * * * * * * * * * * * * */
    // メソッドが正しく呼び出されているか。
    expect(catC.reply()).toBe("😽まだ大丈夫");
    expect(catC.eatSnack()).toBe(0); // hungerPointは非負整数の値。
    expect(catC.eatTuna()).toBe(0);
    /* * * * * * * * * * * * * * * * * * * * */
    // 必須テストケース: しーちゃんが1,5,9,10回遊んだ時の空腹確認。
    expect(catC.play()).toBe(10); // 1回遊んだ時
    for (let i = 0; i < 3; i++) catC.play();
    expect(catC.play()).toBe(50); // 5回遊んだ時
    expect(catC.reply()).toBe("😽まだ大丈夫");
    for (let i = 0; i < 3; i++) catC.play();
    expect(catC.play()).toBe(90); // 9回遊んだ時
    expect(catC.reply()).toBe("😿ハラヘリ");
    expect(catC.play()).toBe(100); // 10回遊んだ時
    expect(catC.reply()).toBe("💥暴れる");
  });
});

jest.mock("./catKyan"); // パスを指定
const CatKyanMock = CatKyan as jest.Mock;

describe("キャンちゃんのテスト", () => {
  test("CatKyan: クラス丸ごとモックになっているか", () => {
    // mockImplementationOnceで実装したいクラスを設定する
    CatKyanMock.mockImplementationOnce(() => {
      return {
        round: 0,
        hungerPoint: 0,
        reaction: "😽まだ大丈夫",
        coefficient: 2,
        anger: false,
        reply(): string {
          if (this.hungerPoint >= 100) {
            this.reaction = "💥暴れる";
            this.anger = true;
          } else if (this.hungerPoint >= 60) {
            this.reaction = "😿ハラヘリ";
          }
          return this.reaction;
        },
        eatSnack(): number | void {
          if (!this.anger)
            return (this.hungerPoint = Math.max((this.hungerPoint -= 40), 0));
        },
        eatTuna(): number | void {
          if (!this.anger) return (this.hungerPoint = 0);
        },
        play(): number {
          this.round++;
          return (this.hungerPoint += 10 * this.coefficient);
        },
      };
    });

    const catKyan = new CatKyan();
    expect(CatKyanMock).toHaveBeenCalled();
    /* * * * * * * * * * * * * * * * * * * * */
    // 初期化処理が正しく行われているか。
    expect(catKyan.round).toBe(0);
    expect(catKyan.hungerPoint).toBe(0);
    expect(catKyan.reaction).toBe("😽まだ大丈夫");
    expect(catKyan.coefficient).toBe(2);
    expect(catKyan.anger).toBe(false);
    /* * * * * * * * * * * * * * * * * * * * */
    // メソッドが正しく呼び出されているか。
    expect(catKyan.reply()).toBe("😽まだ大丈夫");
    expect(catKyan.eatSnack()).toBe(0); // hungerPointは非負整数の値。
    expect(catKyan.eatTuna()).toBe(0);
    /* * * * * * * * * * * * * * * * * * * * */
    // 必須テストケース: キャンちゃんが1,2,3,5回遊んだ時の空腹確認。
    expect(catKyan.play()).toBe(20); // 1回遊んだ時
    expect(catKyan.play()).toBe(40); // 2回遊んだ時
    expect(catKyan.reply()).toBe("😽まだ大丈夫");
    expect(catKyan.play()).toBe(60); // 3回遊んだ時
    expect(catKyan.reply()).toBe("😿ハラヘリ");
    catKyan.play();
    expect(catKyan.play()).toBe(100); // 5回遊んだ時
    expect(catKyan.reply()).toBe("💥暴れる");
  });
});
