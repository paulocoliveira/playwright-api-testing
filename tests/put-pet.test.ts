import { test, expect } from '@playwright/test';
import { createPet, updatePet, getPetById } from '../api/petstoreApi';

test.describe('Petstore Pet update tests', () => {
  let createdPetId: number;

  test('Create and then update a pet', async () => {
    // Primeiro, criar um pet para garantir que temos um ID válido para atualizar
    const newPet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "cats"
      },
      "name": "Whiskers",
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag1" }],
      "status": "available"
    };
    let response = await createPet(newPet);
    createdPetId = response.data.id;

    // Agora, atualizar esse pet
    const updatedPet = {
      ...newPet,
      "id": createdPetId,
      "name": "Mr. Whiskers"
    };
    response = await updatePet(updatedPet);
    expect(response.status).toBe(200);
    console.log('Response JSON for PUT /pet:', JSON.stringify(response.data, null, 2));

    // Verificar se a atualização foi bem sucedida
    response = await getPetById(createdPetId);
    expect(response.data.name).toBe("Mr. Whiskers");
  });
});
