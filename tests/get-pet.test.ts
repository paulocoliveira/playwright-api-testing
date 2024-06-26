import { test, expect } from '@playwright/test';
import { getPetById } from '../api/petstoreApi';

test.describe('Petstore Pet retrieval tests', () => {
  test('Get a pet by valid ID', async () => {
    // Usando um ID conhecido ou criado em um teste anterior
    const petId = 9223372036854659780; // Substitua por um ID válido que você sabe que existe
    const response = await getPetById(petId);
    expect(response.status).toBe(200);
    console.log('Response JSON for GET /pet by valid ID:', JSON.stringify(response.data, null, 2));
    expect(response.data.id).toBe(petId);
  });

  test('Get a pet by non-existing ID', async () => {
    const nonExistingId = 999999999999; // Um ID que você sabe que não existe
    try {
      const response = await getPetById(nonExistingId);
      expect(response.status).toBe(404); // Espera-se que a resposta seja 404 Not Found
    } catch (error) {
      console.error('Failed to get pet by non-existing ID:', error);
      expect(error.response.status).toBe(404);
    }
  });

  test('Get a pet by invalid ID', async () => {
    const invalidId = 0; // Um ID inválido, que não é numérico
    try {
      const response = await getPetById(invalidId);
      expect(response.status).toBe(404); // Espera-se que a resposta seja 404 Not Found para IDs inválidos
    } catch (error) {
      console.error('Failed to get pet by invalid ID:', error);
      expect(error.response.status).toBe(404);
    }
  });
});
