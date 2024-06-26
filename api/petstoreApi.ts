import axios from 'axios';
import { config } from '../config/config';

const baseURL = config.baseURL;

export async function createPet(petData: object) {
    return await axios.post(baseURL, petData);
}

export async function updatePet(petData: object) {
    return await axios.put(baseURL, petData);
}

export async function getPetById(petId: number) {
    return await axios.get(`${baseURL}/${petId}`);
}

export async function deletePet(petId: number) {
    return await axios.delete(`${baseURL}/${petId}`);
}
