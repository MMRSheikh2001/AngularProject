export interface File {
  id?: string;
  messageId: string;
  fileUrl: string;
  fileType: 'image' | 'pdf' | 'doc' | 'zip' | 'other';
}