export class DbBackupHelper {
  static getBackupFileName(dbName: string): string {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `${dbName}_backup_${timestamp}.sql`;
  }
}
