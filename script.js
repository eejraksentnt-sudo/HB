// --- 타이밍 및 유틸리티 ---
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 배경 반짝임 생성
const sparkleBg = document.getElementById('sparkleBg');
for (let i = 0; i < 20; i++) {
  const dot = document.createElement('div');
  dot.className = 'sparkle-dot';
  dot.style.width = Math.random() * 6 + 3 + 'px';
  dot.style.height = dot.style.width;
  dot.style.top = Math.random() * 100 + '%';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.animationDelay = Math.random() * 2 + 's';
  sparkleBg.appendChild(dot);
}

// 엘리먼트 참조
const scene1and2 = document.getElementById('scene1and2');
const scene3 = document.getElementById('scene3');
const scene4 = document.getElementById('scene4');
const scene5 = document.getElementById('scene5');

const layer1 = document.getElementById('layer1');
const layer2 = document.getElementById('layer2');
const cream = document.getElementById('cream');
const cherry = document.getElementById('cherry');

const line1El = document.getElementById('line1');
const line2El = document.getElementById('line2');

const bird = document.getElementById('bird');
const envelope = document.getElementById('envelope');
const clickPrompt = document.getElementById('clickPrompt');

const typedLetterEl = document.getElementById('typedLetter');
const letterScrollBox = document.getElementById('letterScrollBox');
const letterFooter = document.getElementById('letterFooter');

// 축하 텍스트
const text1 = "아빠,";
const text2 = "생일 축하해!";

// 원본 유지 편지 본문
const letterFullText = `아빠 안녕~~ 하나밖에 없는 딸랑이 안서현이얌.
오늘이 아빠 생일이지? 어떻게 빼빼로 데이가 아빠생일 일 줄이야 하지만 이번 아빠 생일에는 내가 옆에 없네. 내가 바쁜 몸이라서 히히. 이번 아빠 생일은 엄마처럼 꽃 말고 내가 열심히 지피티랑 다른 것들이랑 싸우면서 만들었어. 어때? 감동적이지 상상도 못했지? 아빠 아프지 말고 너무 무리하지 말고 아빠랑은 생각보다 대화를 많이 한거 같아 약간 저녁먹고 남은 시간이나 엄마 씻는거 기다리면서 침대에서 논거랑 아빠랑은 이런저런 대화 진짜 많이했던거 같아. 약간 아빠랑 대화하는 느낌이 아니라 친구랑 대화하는 느낌이랄까. 얼마전에 느꼈는데 그 약간 밤에 그냥 식탁위에서 모여서 시덥잖은 주전부리랑 시덥잖은 대화하는 그 분위기가 요즘 너무 좋아. 그래서 빨리 어른 돼서 내가 좋아하는 사람들이랑 그렇게 하고 싶어. 물론 아빠도 포함이고 우리 약속 안 잊었지? 내가 20살 되면 막창먹으면서 같이 술먹어야지. 진짜 곧이야.
난 아빠같이 나 사랑해주는 사람아니면 안만날거야. 평생 결혼 못하겠지? 나 평생 옆에 살아도 돼? 난 진짜 어른돼서 가정 꾸리면 이만큼 못할거 같아. 그중에 가장 큰 역할을 한게 아빠 아닐까? 진짜 부족함없이 가지고 싶은거 먹고 싶은거 다 하고 다 먹고 살아가지고 내 자식들한테는 더 크게 돌려줘야 되니깐 그게 좀 어려울 듯.... 그리고 나는 나같은 딸 못키워. 너무 힘들어.우리 더 감동적인 얘기는 20살되서 막창에 술먹으면서 하자. 상똥씨 생일 축하해~~ 사랑해!`;

// --- 메인 시퀀스 실행 ---
async function startApp() {
  // ===== SCENE 1: 케이크 쌓기 =====
  await delay(400);
  layer1.classList.add('drop'); // 1. 1층 케이크
  await delay(950);
  
  layer2.classList.add('drop'); // 2. 2층 케이크
  await delay(950);
  
  cream.classList.add('drop');  // 3. 생크림
  await delay(800);
  
  cherry.classList.add('drop'); // 4. 체리
  await delay(1000);

  // ===== SCENE 2: 축하 문구 타이핑 =====
  await typeText(line1El, text1, 120);
  await delay(200);
  await typeText(line2El, text2, 120);
  
  // 문구 팝 효과
  line1El.style.transform = 'scale(1.1)';
  line2El.style.transform = 'scale(1.1)';
  line1El.style.transition = 'transform 0.3s ease';
  line2El.style.transition = 'transform 0.3s ease';
  await delay(300);
  line1El.style.transform = 'scale(1)';
  line2El.style.transform = 'scale(1)';
  
  // 하트 퐁퐁 효과
  createFloatingHearts(document.getElementById('cakeStage'), 5);

  await delay(2200);

  // ===== SCENE 3: 핑크색 배경만 남기기 =====
  scene1and2.style.opacity = '0';
  await delay(800);
  scene1and2.classList.remove('active');
  
  scene3.classList.add('active');
  scene3.style.opacity = '1';
  await delay(1200); // 핑크 배경만 1초 이상 유지

  // ===== SCENE 4: 비둘기와 편지 =====
  scene3.style.opacity = '0';
  scene3.classList.remove('active');
  
  scene4.classList.add('active');
  scene4.style.opacity = '1';

  // 비둘기 비행 시작
  bird.classList.add('fly');

  // 비둘기가 중앙을 통과할 즈음 편지 떨어뜨리기
  setTimeout(() => {
    envelope.classList.add('drop-anim');
  }, 1800);

  // 비둘기 비행 및 편지 안착 완료 후
  await delay(4000);
  envelope.classList.remove('drop-anim');
  envelope.classList.add('pulse-anim');
  
  // 안내 문구 서서히 등장
  clickPrompt.style.opacity = '1';

  // 편지 클릭 이벤트 등록
  enableEnvelopeClick();
}

// 한 글자씩 타이핑 함수
function typeText(element, text, speed) {
  return new Promise(resolve => {
    let index = 0;
    element.textContent = '';
    const timer = setInterval(() => {
      element.textContent += text[index];
      index++;
      if (index >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

// 하트 둥둥 효과 생성기
function createFloatingHearts(targetEl, count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = '❤️';
      heart.style.left = (20 + Math.random() * 60) + '%';
      heart.style.bottom = '40%';
      targetEl.appendChild(heart);
      setTimeout(() => heart.remove(), 2500);
    }, i * 300);
  }
}

// ===== SCENE 4 -> 5 전환 (편지 터치/클릭) =====
function enableEnvelopeClick() {
  const handleOpen = async () => {
    envelope.removeEventListener('click', handleOpen);
    envelope.removeEventListener('touchstart', handleOpen);

    // 안내 문구 fade out
    clickPrompt.style.opacity = '0';
    
    // 봉투 커짐 & 반짝임
    envelope.classList.remove('pulse-anim');
    envelope.style.transform = 'translate(-50%, -50%) scale(1.25)';
    envelope.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    createFloatingHearts(scene4, 6);
    await delay(600);

    // 덮개 열기
    envelope.classList.add('open');
    await delay(700);

    // SCENE 5 편지 등장
    scene4.style.opacity = '0';
    await delay(600);
    scene4.classList.remove('active');

    scene5.classList.add('active');
    scene5.style.opacity = '1';

    await delay(800);
    // 편지 타이핑 시작
    startLetterTyping();
  };

  envelope.addEventListener('click', handleOpen);
  envelope.addEventListener('touchstart', handleOpen, { passive: true });
}

// ===== SCENE 5: 편지 타이핑 및 자동 스크롤 =====
async function startLetterTyping() {
  typedLetterEl.textContent = '';
  const chars = Array.from(letterFullText);

  for (let i = 0; i < chars.length; i++) {
    typedLetterEl.textContent += chars[i];
    
    // 타이핑되는 동안 자동 스크롤 하단 추적
    letterScrollBox.scrollTop = letterScrollBox.scrollHeight;
    
    let charDelay = 45;
    if (['.', '?', '!', '\n'].includes(chars[i])) {
      charDelay = 180;
    }
    await delay(charDelay);
  }

  // 타이핑 완료 후 서명 및 하트 등장
  await delay(400);
  letterFooter.classList.add('show');
  
  const endingSparkles = document.getElementById('endingSparkles');
  createFloatingHearts(endingSparkles, 8);
}

// 페이지 로드시 자동 시작
window.addEventListener('DOMContentLoaded', () => {
  startApp();
});
