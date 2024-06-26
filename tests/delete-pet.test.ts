import { test, expect } from '@playwright/test';
import { createPet, deletePet, getPetById } from '../api/petstoreApi';

test.describe('Petstore Pet deletion tests', () => {
  let createdPetId: number;

  test('Create and then delete a pet', async () => {
    // Criar um pet primeiro para garantir um ID válido para deletar
    const newPet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "dogs"
      },
      "name": "Rover",
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag1" }],
      "status": "available"
    };
    let response = await createPet(newPet);
    createdPetId = response.data.id;

    // Deletar o pet
    response = await deletePet(createdPetId);
    expect(response.status).toBe(200);
    console.log('Response JSON for DELETE /pet:', JSON.stringify(response.data, null, 2));

    // Verificar se a exclusão foi bem sucedida
    try {
      await getPetById(createdPetId);
      throw new Error("Pet still exists after deletion.");
    } catch (error) {
      expect(error.response.status).toBe(404); // O pet não deve mais existir
    }
  });
});
