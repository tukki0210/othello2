const board = document.getElementById('board')

let count = 0

// オセロの状態を保存する配列
const game = []

// よく使いそうな処理は関数にする
function makeBlack(masu) {
    masu.textContent = '●'
    masu.classList.add('black')
}

function makeWhite(masu) {
    masu.textContent = '●'
    masu.classList.add('white')
}

// 最初は横一列（一次元）のオセロで考える
for (let i = 0; i < 8; i++) {
    const masu = document.createElement('div');

    if (i === 27 || i === 36) {
        makeBlack(masu)
    } else if (i === 28 || i === 35) {
        makeWhite(masu)
    } else {
        masu.addEventListener('click', () => {
            if (count % 2 === 0) {
                makeBlack(masu)
            } else {
                makeWhite(masu)
            }
            count++
        }, {
            once: true
        })
    }


    board.append(masu);
}
