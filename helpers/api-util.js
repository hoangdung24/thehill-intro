import axios from "axios";

export async function getAllData() {
	const response = await axios.get(
		"https://member-intro.t-solution.vn/api/v2/pages/?fields=*&type=blog.BlogDetailPage"
	);
	const data = await response.data;

	const dataSheet = [];

	for (const key in data) {
		dataSheet.push({
			id: key,
			...data[key],
		});
	}

	return dataSheet;
}

export async function getDataById(id) {
	const allData = await getAllData();

	return allData.find((data) => data.id === id);
}

// export async function getFilteredEvents(dateFilter) {
// 	const { year, month } = dateFilter;

// 	const allEvents = await getAllEvents();

// 	let filteredEvents = allEvents.filter((event) => {
// 		const eventDate = new Date(event.date);
// 		return (
// 			eventDate.getYear() === year && eventDate.getMonth() === month - 1
// 		);
// 	});

// 	return filteredEvents;
// }

// export async function getFilteredData(dataFilter){
//     const allData = await getAllData();

//     return allData.find((data) => data.dataFilter)
// }

export function getFilteredData(id, data) {
	return data.find((e) => {
		return e.id == id;
	});
}