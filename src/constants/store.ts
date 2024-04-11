import type { ISearch } from "@/api/stzb/data"

export const SEARCH_STORE = "SEARCH_STORE"

// 常用检索条件，存储在localstorage
const searchStore: ISearch[] = [{
  "priceMin": 200,
  "priceMax": 5000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  "cardAdvanceNum": 0,
  "id": "h1",
  "maxCoreScore": 4.06,
  "maxRedScore": 4.5,
  "remark": "155"
}, {
  "priceMin": 5000,
  "priceMax": 10000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  "cardAdvanceNum": 0,
  "id": "h2",
  "maxCoreScore": 3.27,
  "maxRedScore": 3.58,
  "remark": "214"
}, {
  "priceMin": 10000,
  "priceMax": 15000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  "cardAdvanceNum": 0,
  "id": "h3"
}, {
  "priceMin": 200,
  "priceMax": 20000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526, 100451, 100619, 100615, 100670],
  "cardAdvanceNum": 0,
  "id": "h4"
}, {
  "priceMin": 200,
  "priceMax": 50000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  "cardAdvanceNum": 1,
  "id": "h5"
}, {
  "priceMin": 200,
  "priceMax": 100000,
  "passFairShow": "2",
  "cardHeroId": [100030, 100016, 100023],
  "cardAdvanceNum": 4,
  "id": "huangM",
  "maxCoreScore": 1.01,
  "maxRedScore": 1.73,
  "maxScore": 4.03,
  "remark": "65000-545"
}, {
  "priceMin": 200,
  "priceMax": 100000,
  "passFairShow": "2",
  "cardHeroId": [100013, 100030, 100016, 100023, 100035, 100526],
  "cardAdvanceNum": 4,
  "id": "heM",
  "maxRedScore": 1.49,
  "maxCoreScore": 0.78,
  "maxScore": 2.47,
  "remark": "65000-488"
}, {
  "priceMin": 200,
  "priceMax": 50000,
  "passFairShow": "2",
  "cardHeroId": [100479],
  "cardAdvanceNum": 4,
  "id": "g1",
  "maxCoreScore": 1.44,
  "maxRedScore": 2.21,
  "remark": "47000 -373"
}, {
  "priceMin": 200,
  "priceMax": 50000,
  "passFairShow": "2",
  "cardHeroId": [100496],
  "cardAdvanceNum": 4,
  "id": "z1",
  "remark": "45000-337",
  "maxScore": 0,
  "maxCoreScore": 2.5,
  "maxRedScore": 3.25
}, {
  "priceMin": 200,
  "priceMax": 100000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100496],
  "cardAdvanceNum": 3,
  "id": "j1",
  "maxCoreScore": 0.91,
  "maxRedScore": 1.73,
  "remark": "80000-604"
}, {
  "priceMin": 200,
  "priceMax": 200000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100496],
  "cardAdvanceNum": 4,
  "id": "j2",
  "maxCoreScore": 0.6,
  "maxRedScore": 1.12,
  "maxScore": 0,
  "remark": "691"
}]