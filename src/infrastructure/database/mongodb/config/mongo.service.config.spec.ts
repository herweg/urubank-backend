import { MongoConfigService } from '.';

it('MongoConfigService', () => {
  // Arrange
  const mongoConfigService = new MongoConfigService();
  // Act
  const result = mongoConfigService.createTypeOrmOptions();
  // Assert
  expect(result).toBeDefined();
});
