const gameConfig = {
  dumpling: {
    name: '包饺子',
    emoji: '🥟',
    startMessage: '饺子模式启动！擀皮、加馅、捏褶子，一步到位！记住：别让饺子飞上天当烟花哦！',
    ingredients: [
      { name: '面粉', emoji: '🌾', count: 12 },
      { name: '猪肉', emoji: '🥩', count: 10 },
      { name: '韭菜', emoji: '🌿', count: 8 },
      { name: '鸡蛋', emoji: '🥚', count: 6 }
    ],
    messages: [
      '面粉加水和成面团，揉啊揉！',
      '猪肉剁成肉馅，香喷喷！',
      '韭菜切碎，绿油油！',
      '鸡蛋打散，金灿灿！',
      '包饺子啦，捏捏捏！',
      '下锅煮饺子，咕嘟咕嘟！',
      '饺子出锅啦，热气腾腾！'
    ],
    funnyComments: [
      '这饺子包得比我奶奶还好看！',
      '你是饺子界的米其林大厨！',
      '这手艺，开个饺子店肯定爆满！',
      '饺子包得这么好，是不是偷偷练过？',
      '这饺子，连财神爷都想来尝一口！',
      '你的厨艺已经超越了99%的选手！',
      '奶奶看了都要给你竖大拇指！',
      '这饺子，能上春晚了！'
    ],
    failComments: [
      '哎呀！饺子飞上天当烟花啦！没关系，再来一个！',
      '这个饺子有点丑，但很可爱！',
      '没关系，下次一定能包好！',
      '这是创意饺子，很有艺术感！',
      '奶奶说：包饺子要有耐心！'
    ],
    resultComments: {
      excellent: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个饺子！',
      good: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个饺子！',
      normal: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个饺子！',
      beginner: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个饺子！'
    }
  },
  tangyuan: {
    name: '搓汤圆',
    emoji: '🍡',
    startMessage: '汤圆模式解锁！揉糯米团、包芝麻馅，软糯Q弹全靠你～小心别把馅蹭到脸上当腮红！',
    ingredients: [
      { name: '糯米粉', emoji: '🍚', count: 12 },
      { name: '芝麻', emoji: '🌰', count: 10 },
      { name: '花生', emoji: '🥜', count: 8 },
      { name: '红糖', emoji: '🍬', count: 6 }
    ],
    messages: [
      '糯米粉加水和成团，软糯糯！',
      '芝麻炒香，香喷喷！',
      '花生碾碎，香脆脆！',
      '红糖融化，甜滋滋！',
      '搓汤圆啦，圆圆圆！',
      '下锅煮汤圆，咕嘟咕嘟！',
      '汤圆出锅啦，甜甜蜜蜜！'
    ],
    funnyComments: [
      '这汤圆搓得比月亮还圆！',
      '你是汤圆界的艺术家！',
      '这手艺，元宵节肯定能拿冠军！',
      '汤圆搓得这么好，是不是月兔教的？',
      '这汤圆，连嫦娥都想来尝一口！',
      '你的厨艺已经超越了99%的选手！',
      '奶奶看了都要给你竖大拇指！',
      '这汤圆，能上元宵晚会了！'
    ],
    failComments: [
      '哎呀！汤圆飞上天当烟花啦！没关系，再来一个！',
      '这个汤圆有点扁，但很可爱！',
      '没关系，下次一定能搓好！',
      '这是创意汤圆，很有艺术感！',
      '奶奶说：搓汤圆要有耐心！'
    ],
    resultComments: {
      excellent: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个汤圆！',
      good: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个汤圆！',
      normal: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个汤圆！',
      beginner: '【年夜饭圆满完成】！速度刚刚好，全家吃得香～奖励：优先挑年夜饭的第一个汤圆！'
    }
  }
};

const difficultySettings = {
  easy: { time: 90, multiplier: 1 },
  normal: { time: 60, multiplier: 1.5 },
  hard: { time: 45, multiplier: 2 }
};

Page({
  data: {
    currentScreen: 'menu',
    currentGame: null,
    difficulty: 'normal',
    score: 0,
    timeLeft: 60,
    isCooking: false,
    ingredients: [],
    selectedIngredients: [],
    progress: 0,
    potContent: '🍲',
    message: '拖拽食材到锅中开始制作！',
    fuCollected: 0,
    grandmaUsed: false,
    consecutiveSuccess: 0,
    consecutiveFail: 0,
    roomId: '',
    playerName: '玩家' + Math.floor(Math.random() * 1000),
    isMultiplayer: false,
    leaderboard: [],
    showLeaderboard: false,
    resultEmoji: '🎉',
    resultTitle: '恭喜完成！',
    resultCount: 0,
    resultScore: 0,
    resultTime: 0,
    resultLevel: '新手',
    funnyComment: '你的厨艺还需要多加练习哦！',
    showEasterEgg: false,
    easterEggText: '',
    showWelcomeModal: true,
    showTutorialModal: false
  },

  onLoad() {
    setTimeout(() => {
      this.setData({ showWelcomeModal: true });
    }, 500);
  },

  onUnload() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  },

  closeWelcomeModal() {
    this.setData({ showWelcomeModal: false });
    setTimeout(() => {
      this.setData({ showTutorialModal: true });
    }, 300);
  },

  closeTutorialModal() {
    this.setData({ showTutorialModal: false });
  },

  selectGame(e) {
    const game = e.currentTarget.dataset.game;
    this.setData({ currentGame: game });
    this.setData({ currentScreen: 'game' });
    this.initGame();
    const config = gameConfig[game];
    this.setData({ message: config.startMessage });
  },

  goToImageProcessor() {
    wx.navigateTo({
      url: '/pages/image-processor/image-processor'
    });
  },

  setDifficulty(e) {
    const level = e.currentTarget.dataset.level;
    this.setData({ difficulty: level });
  },

  initGame() {
    const config = gameConfig[this.data.currentGame];
    const settings = difficultySettings[this.data.difficulty];

    this.setData({
      score: 0,
      timeLeft: settings.time,
      isCooking: false,
      selectedIngredients: [],
      progress: 0,
      fuCollected: 0,
      grandmaUsed: false,
      consecutiveSuccess: 0,
      consecutiveFail: 0,
      potContent: '🍲',
      message: '拖拽食材到锅中开始制作！'
    });

    const ingredients = config.ingredients.map(ing => ({ ...ing }));
    this.setData({ ingredients });

    this.startTimer();
  },

  handleTouchStart(e) {
    if (this.data.isCooking) return;
    const index = e.currentTarget.dataset.index;
    this.setData({ draggedIndex: index });
  },

  handleTouchMove(e) {
    if (!this.data.draggedIndex) return;
    const touch = e.touches[0];
    const query = wx.createSelectorQuery();
    query.select('#cooking-pot').boundingClientRect();
    query.exec((res) => {
      const pot = res[0];
      if (pot && touch.clientX >= pot.left && touch.clientX <= pot.right &&
          touch.clientY >= pot.top && touch.clientY <= pot.bottom) {
        this.selectIngredient(this.data.draggedIndex);
      }
    });
  },

  handleTouchEnd(e) {
    this.setData({ draggedIndex: null });
  },

  selectIngredient(index) {
    if (this.data.isCooking) return;

    const ingredients = this.data.ingredients;
    if (ingredients[index].count > 0) {
      ingredients[index].count--;
      const selectedIngredients = [...this.data.selectedIngredients, ingredients[index]];
      
      this.setData({ 
        ingredients,
        selectedIngredients,
        fuCollected: this.data.fuCollected + 1
      });

      const messages = [
        `添加了${ingredients[index].name}！`,
        `${ingredients[index].name}来啦！`,
        `放入${ingredients[index].name}！`,
        `${ingredients[index].name}准备好了！`
      ];
      this.setData({ 
        message: messages[Math.floor(Math.random() * messages.length)]
      });

      this.checkEasterEgg();
    } else {
      const failMessages = [
        `${ingredients[index].name}已经用完啦！`,
        `${ingredients[index].name}不够了！`,
        `${ingredients[index].name}用光了！`
      ];
      this.setData({ 
        message: failMessages[Math.floor(Math.random() * failMessages.length)]
      });
    }
  },

  checkEasterEgg() {
    if (this.data.fuCollected >= 5 && !this.data.grandmaUsed) {
      this.setData({
        showEasterEgg: true,
        easterEggText: '👵 奶奶来救场了！\n获得双倍分数加成！',
        grandmaUsed: true,
        score: this.data.score * 2
      });
      setTimeout(() => {
        this.setData({ showEasterEgg: false });
      }, 3000);
    }
  },

  cook() {
    if (this.data.selectedIngredients.length === 0) {
      this.setData({ message: '请先选择食材！' });
      return;
    }

    this.setData({ isCooking: true });
    const config = gameConfig[this.data.currentGame];
    let step = 0;
    const successRate = 0.8 + (this.data.score / 1000);

    const cookingInterval = setInterval(() => {
      if (step < config.messages.length) {
        this.setData({ message: config.messages[step] });
        step++;
      } else {
        clearInterval(cookingInterval);
        
        if (Math.random() > successRate) {
          this.failCooking();
        } else {
          this.completeCooking();
        }
      }
    }, 1000);
  },

  completeCooking() {
    const settings = difficultySettings[this.data.difficulty];
    const points = Math.floor(this.data.selectedIngredients.length * 10 * settings.multiplier);
    const newScore = this.data.score + points;
    const newProgress = Math.min(this.data.progress + 20, 100);

    const consecutiveSuccess = this.data.consecutiveSuccess + 1;
    let newTimeLeft = this.data.timeLeft;

    if (consecutiveSuccess >= 5) {
      this.setData({
        showEasterEgg: true,
        easterEggText: '🎊 连中五元！五福集齐啦！\n今年好运爆棚！\n⏰ 倒计时增加30秒！',
        consecutiveSuccess: 0,
        timeLeft: this.data.timeLeft + 30
      });
      newTimeLeft = this.data.timeLeft + 30;
      setTimeout(() => {
        this.setData({ showEasterEgg: false });
      }, 3000);
    }

    this.setData({
      score: newScore,
      progress: newProgress,
      consecutiveSuccess,
      consecutiveFail: 0,
      message: `制作完成！获得${points}分！`,
      potContent: gameConfig[this.data.currentGame].emoji,
      isCooking: false,
      selectedIngredients: [],
      timeLeft: newTimeLeft
    });

    if (this.data.isMultiplayer) {
      this.updateLeaderboard();
    }

    if (newProgress >= 100) {
      this.endGame();
    }
  },

  failCooking() {
    const config = gameConfig[this.data.currentGame];
    const failComment = config.failComments[Math.floor(Math.random() * config.failComments.length)];
    
    this.setData({
      message: failComment,
      potContent: '🍲',
      isCooking: false,
      selectedIngredients: []
    });
  },

  startTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.timerInterval = setInterval(() => {
      this.setData({ timeLeft: this.data.timeLeft - 1 });
      if (this.data.timeLeft <= 0) {
        this.endGame();
      }
    }, 1000);
  },

  endGame() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.showResult();
  },

  showResult() {
    const settings = difficultySettings[this.data.difficulty];
    const usedTime = settings.time - this.data.timeLeft;
    const config = gameConfig[this.data.currentGame];

    const count = Math.floor(this.data.score / (10 * settings.multiplier));
    let level = '新手';
    let emoji = '😊';
    let resultComment = config.resultComments.beginner;

    if (count >= 25) {
      level = '传说厨神';
      emoji = '👑';
      resultComment = config.resultComments.excellent;
    } else if (count >= 20) {
      level = '特级厨神';
      emoji = '🏆';
      resultComment = config.resultComments.good;
    } else if (count >= 15) {
      level = '高级厨神';
      emoji = '🥇';
      resultComment = config.resultComments.good;
    } else if (count >= 10) {
      level = '中级厨神';
      emoji = '🥈';
      resultComment = config.resultComments.normal;
    } else if (count >= 5) {
      level = '初级厨神';
      emoji = '🥉';
      resultComment = config.resultComments.normal;
    }

    const randomComment = config.funnyComments[Math.floor(Math.random() * config.funnyComments.length)];

    this.setData({
      currentScreen: 'result',
      resultEmoji: emoji,
      resultTitle: `${config.name}完成！`,
      resultCount: count,
      resultScore: this.data.score,
      resultTime: usedTime,
      resultLevel: level,
      funnyComment: resultComment
    });
  },

  resetGame() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.initGame();
  },

  backToMenu() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.setData({ currentScreen: 'menu' });
  },

  playAgain() {
    this.setData({ currentScreen: 'game' });
    this.initGame();
  },

  share(e) {
    const platform = e.currentTarget.dataset.platform;
    const settings = difficultySettings[this.data.difficulty];
    const usedTime = settings.time - this.data.timeLeft;
    const count = Math.floor(this.data.score / (10 * settings.multiplier));
    const config = gameConfig[this.data.currentGame];

    const shareText = `🧧 新春厨神争霸赛 🧧\n我在${config.name}挑战中获得了${this.data.score}分，制作了${count}个${config.emoji}！\n快来挑战我吧！\n#新春厨神争霸赛 #年夜饭挑战`;

    if (platform === 'copy') {
      wx.setClipboardData({
        data: shareText,
        success: () => {
          wx.showToast({
            title: '成绩已复制到剪贴板！',
            icon: 'success'
          });
        }
      });
    } else if (platform === 'wechat') {
      wx.showShareMenu({
        withShareTicket: true
      });
    }
  },

  onRoomInput(e) {
    this.setData({ roomId: e.detail.value });
  },

  createRoom() {
    const roomId = Math.floor(1000 + Math.random() * 9000);
    this.setData({ 
      roomId: roomId.toString(),
      isMultiplayer: true,
      showLeaderboard: true
    });
    
    this.updateLeaderboard();
    
    this.setData({
      showEasterEgg: true,
      easterEggText: `私密房间创建成功！\n房间号：${roomId}\n快喊家人加入吧！`
    });
    setTimeout(() => {
      this.setData({ showEasterEgg: false });
    }, 3000);
  },

  joinRoom() {
    const inputRoomId = parseInt(this.data.roomId);
    
    if (!inputRoomId || inputRoomId < 1000 || inputRoomId > 9999) {
      wx.showToast({
        title: '请输入有效的4位房间号！',
        icon: 'none'
      });
      return;
    }
    
    this.setData({ 
      roomId: this.data.roomId,
      isMultiplayer: true,
      showLeaderboard: true
    });
    
    this.updateLeaderboard();
    
    this.setData({
      showEasterEgg: true,
      easterEggText: `成功加入房间 ${this.data.roomId}！\n准备就绪，3秒后挑战开始！`
    });
    setTimeout(() => {
      this.setData({ showEasterEgg: false });
    }, 3000);
  },

  updateLeaderboard() {
    const leaderboard = [
      { name: this.data.playerName, score: this.data.score },
      { name: '玩家A', score: Math.floor(Math.random() * 200) },
      { name: '玩家B', score: Math.floor(Math.random() * 200) },
      { name: '玩家C', score: Math.floor(Math.random() * 200) }
    ];
    
    leaderboard.sort((a, b) => b.score - a.score);
    
    this.setData({ leaderboard });
  },

  onShareAppMessage() {
    const config = gameConfig[this.data.currentGame];
    return {
      title: '🧧 新春厨神争霸赛 🧧',
      path: '/pages/index/index',
      imageUrl: ''
    };
  }
});