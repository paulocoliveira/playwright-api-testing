import { test, expect } from '@playwright/test';
import { createPet, getPetById } from '../api/petstoreApi';

test.describe('Petstore Pet tests', () => {
  let createdPetId: number;

  test('Create a new pet', async () => {
    const newPet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "dogs"
      },
      "name": "Rex",
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag1" }],
      "status": "available"
    };

    const response = await createPet(newPet);
    expect(response.status).toBe(200);
    console.log('Response JSON for POST /pet:', JSON.stringify(response.data, null, 2));
    createdPetId = response.data.id;

    



  });

  test('Create a new pet without category', async () => {
    const newPet = {
      "id": 0,
      "name": "Buddy",
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag2" }],
      "status": "available"
    };

    const response = await createPet(newPet);
    expect(response.status).toBe(200);
    console.log('Response JSON for POST /pet without category:', JSON.stringify(response.data, null, 2));
  });

  test('Create a new pet without name', async () => {
    const newPet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "cats"
      },
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag3" }],
      "status": "available"
    };

    try {
      const response = await createPet(newPet);
      expect(response.status).toBe(200);
      console.log('Response JSON for POST /pet without name:', JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Failed to create pet without name:', error);
      expect(error.response.status).toBe(400); // Assuming 400 Bad Request for missing required fields
    }
  });

  test('Create a new pet with the same name of an existent one', async () => {
    const newPet = {
      "id": 0,
      "category": {
        "id": 0,
        "name": "birds"
      },
      "name": "Rex",  // Same name as an existing pet
      "photoUrls": ["string"],
      "tags": [{ "id": 0, "name": "tag4" }],
      "status": "available"
    };

    const response = await createPet(newPet);
    expect(response.status).toBe(200);
    console.log('Response JSON for POST /pet with the same name:', JSON.stringify(response.data, null, 2));
  });
});
