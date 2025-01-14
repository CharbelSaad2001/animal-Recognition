import { SERVER_URL } from "../constants";

const endpoint = `${SERVER_URL}/upload-image`;

export async function uploadAndAnalize(file) {
	try {
		const formData = new FormData();
		formData.append("file", file);

		const response = await fetch(endpoint, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			throw new Error("Error en la respuesta del servidor");
		}

		const data = await response.json();

		return data;
	} catch (error) {}
}
