import { CatC } from "./catC";
import { CatKyan } from "./catKyan";
const prompts = require("prompts");

const catC = new CatC();
const catKyan = new CatKyan();

(async function () {
  const question = {
    type: "select",
    name: "ownerAction",
    message: "CatOwner, 行動を選択してください。",
    choices: [
      {
        title: "しーちゃんが空腹かどうか確かめる",
        description: "まだ大丈夫/ハラヘリ/暴れる",
        value: "cHungry",
      },
      {
        title: "しーちゃんに餌をあげる(おやつ)",
        description: "HungerPoint - 40",
        value: "cSnack",
      },
      {
        title: "しーちゃんに餌をあげる(シーチキン)",
        description: "HungerPoint = 0",
        value: "cTuna",
      },
      {
        title: "しーちゃんと遊ぶ",
        description: "HungerPoint += 10 * ハラヘリ係数",
        value: "cPlay",
      },
      {
        title: "キャンちゃんが空腹かどうか確かめる",
        description: "まだ大丈夫/ハラヘリ/暴れる",
        value: "kHungry",
      },
      {
        title: "キャンちゃんに餌をあげる(おやつ)",
        description: "HungerPoint - 40",
        value: "kSnack",
      },
      {
        title: "キャンちゃんに餌をあげる(シーチキン)",
        description: "HungerPoint = 0",
        value: "kTuna",
      },
      {
        title: "キャンちゃんと遊ぶ",
        description: "HungerPoint += 10 * ハラヘリ係数",
        value: "kPlay",
      },
    ],
  };
  let allRound: number = 0;
  while (allRound < 50) {
    let response = await prompts(question); // response = { ownerAction: "cHungry" }

    if (response.ownerAction === "cHungry") {
      console.log("\n👩しーちゃん、お腹空いてる？\n→ " + catC.reply());
      console.log(
        "\n📣現在、しーちゃんが遊んだ回数は" +
          catC.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "cSnack") {
      if (catC.anger) {
        console.log("\n🙀しーちゃんは暴れています！！");
      } else {
        console.log(
          "\n😻しーちゃんはおやつを食べた！\n➡️現在のしーちゃんのhungerPointは " +
            catC.eatSnack() +
            " です。"
        );
      }
      console.log(
        "\n📣現在、しーちゃんが遊んだ回数は" +
          catC.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "cTuna") {
      if (catC.anger) {
        console.log("\n🙀しーちゃんは暴れています！！");
      } else {
        console.log(
          "\n😻しーちゃんはシーチキンを食べた！\n➡️現在のしーちゃんのhungerPointは " +
            catC.eatTuna() +
            " です。"
        );
      }
      console.log(
        "\n📣現在、しーちゃんが遊んだ回数は" +
          catC.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "cPlay") {
      console.log(
        "\n🧸しーちゃんと遊んだよ！\n➡️現在のしーちゃんのhungerPointは " +
          catC.play() +
          " です。"
      );
      console.log(
        "\n📣現在、しーちゃんが遊んだ回数は" +
          catC.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "kHungry") {
      console.log("\n👩キャンちゃん、お腹空いてる？\n→ " + catKyan.reply());
      console.log(
        "\n📣現在、キャンちゃんが遊んだ回数は" +
          catKyan.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "kSnack") {
      if (catKyan.anger) {
        console.log("\n🙀キャンちゃんは暴れています！！");
      } else {
        console.log(
          "\n😻キャンちゃんはおやつを食べた！\n➡️現在のキャンちゃんのhungerPointは " +
            catKyan.eatSnack() +
            " です。"
        );
      }
      console.log(
        "\n📣現在、キャンちゃんが遊んだ回数は" +
          catKyan.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "kTuna") {
      if (catKyan.anger) {
        console.log("\n🙀キャンちゃんは暴れています！！");
      } else {
        console.log(
          "\n😻キャンちゃんはシーチキンを食べた！\n➡️現在のキャンちゃんのhungerPointは " +
            catKyan.eatTuna() +
            " です。"
        );
      }
      console.log(
        "\n📣現在、キャンちゃんが遊んだ回数は" +
          catKyan.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    } else if (response.ownerAction === "kPlay") {
      console.log(
        "\n🧸キャンちゃんと遊んだよ！\n➡️現在のキャンちゃんのhungerPointは " +
          catKyan.play() +
          " です。"
      );
      console.log(
        "\n📣現在、キャンちゃんが遊んだ回数は" +
          catKyan.round +
          "回です。\n\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n"
      );
    }
    allRound++;
  }
})();
