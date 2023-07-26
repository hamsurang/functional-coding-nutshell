/**
 * 출제자: 수림님 (sonsurim)
 * Q. 아래의 코드는 책에서 소개된 등급에 맞게 쿠폰을 이메일로 보내는 요구사항을 구현한 코드입니다. 
 * 본인만의 방식으로 리팩터링 해주세요
 * 어떤 부분을 리팩터링의 기준으로 삼았는지 PR에 작성하기
   - Ex. 데이터, 계산, 액션
 */

const subscriber = {
  email: 'sam@pmail.com',
  rec_count: 16,
}

const rank1 = 'best'
const rank2 = 'good'

function subCouponRank(subscriber) {
  if (subscriber.rec_count >= 10) return 'best'
  else return 'good'
}

const coupon = {
  code: '10PERCENT',
  rank: 'bad',
}

function selectCouponsByRank(coupons, rank) {
  const ret = []
  for (let c = 0; c < coupons.length; c++) {
    const coupon = coupons[c]
    if (coupon.rank === rank) ret.push(coupon.code)
  }
  return ret
}

const message = {
  from: 'newsletter@coupondog.co',
  to: 'sam@pmail.com',
  subject: 'Your weekly coupons inside',
  body: 'Here are your coupons ...',
}

function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber)
  if (rank === 'best')
    return {
      from: 'newsletter@coupondog.co',
      to: subscriber.email,
      subject: 'Your best weekly coupons inside',
      body: 'Here are the best coupons: ' + bests.join(', '),
    }
  // rank === "good"
  else
    return {
      from: 'newsletter@coupondog.co',
      to: subscriber.email,
      subject: 'Your good weekly coupons inside',
      body: 'Here are the good coupons: ' + goods.join(', '),
    }
}

function emailsForSubscribers(subscribers, goods, bests) {
  const emails = []
  for (let s = 0; s < subscribers.length; s++) {
    const subscriber = subscribers[s]
    const email = emailForSubscriber(subscriber, goods, bests)
    emails.push(email)
  }
  return emails
}

function sendIssue() {
  const coupons = fetchCouponsFromDB()
  const goodCoupons = selectCouponsByRank(coupons, 'good')
  const bestCoupons = selectCouponsByRank(coupons, 'best')
  const subscribers = fetchSubscribersFromDB()
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons)
  for (let e = 0; e < emails.length; e++) {
    const email = emails[e]
    emailSystem.send(email)
  }
}
