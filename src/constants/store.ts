import type { ISearch } from '@/api/stzb/data'

export const SEARCH_STORE = 'SEARCH_STORE'

// 常用检索条件，存储在localstorage
const searchStore: ISearch[] = [{
  'priceMin': 200,
  'priceMax': 5000,
  'passFairShow': '2',
  'cardHeroId': [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  'cardAdvanceNum': 0,
  'id': 'h1'
}, {
  'priceMin': 5000,
  'priceMax': 10000,
  'passFairShow': '2',
  'cardHeroId': [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  'cardAdvanceNum': 0,
  'id': 'h2'
}, {
  'priceMin': 10000,
  'priceMax': 15000,
  'passFairShow': '2',
  'cardHeroId': [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  'cardAdvanceNum': 0,
  'id': 'h3'
}, {
  'priceMin': 15000,
  'priceMax': 20000,
  'passFairShow': '2',
  'cardHeroId': [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526,100451,100619,100615,100670],
  'cardAdvanceNum': 0,
  'id': 'h4'
}, {
  'priceMin': 200,
  'priceMax': 50000,
  'passFairShow': '2',
  'cardHeroId': [100013, 100479, 100030, 100016, 100496, 100023, 100035, 100526],
  'cardAdvanceNum': 1,
  'id': 'h5'
}, {
  'priceMin': 200,
  'priceMax': 30000,
  'passFairShow': '2',
  'cardHeroId': [100479],
  'cardAdvanceNum': 4,
  'id': 'g1'
}, {
  'priceMin': 200,
  'priceMax': 30000,
  'passFairShow': '2',
  'cardHeroId': [100496],
  'cardAdvanceNum': 4,
  'id': 'z1'
}, {
  'priceMin': 200,
  'priceMax': 100000,
  'passFairShow': '2',
  'cardHeroId': [100479, 100496],
  'cardAdvanceNum': 3,
  'id': 'j1'
}, {
  'priceMin': 200,
  'priceMax': 200000,
  'passFairShow': '2',
  'cardHeroId': [100479, 100496],
  'cardAdvanceNum': 4,
  'id': 'j2'
}]



