export default class AviasalesDBService {

	constructor() {

		this.API_BASE = 'https://aviasales-test-api.java-mentor.com/';

		this.getSearchId = async () => {
			const response = await fetch(`${this.API_BASE}search`);
			const result = await response.json();
			return result;
		}

		this.getTickets = async (searchId) => {
			try {
				const response = await fetch(`${this.API_BASE}tickets?searchId=${searchId}`)
				const { tickets, stop } = await response.json();
				return [tickets, stop]
			}
			catch (e) {
				console.log(`произошла ошибка ${e.message}, пробуем повторно получить данные`)
				return [[], false]
			}
		}
	}

}