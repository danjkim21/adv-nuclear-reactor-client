export interface UserInterface {
  username: string;
  authenticated: boolean;
  role: string;
  verified: boolean;

  // TODO: Add new fields in mongoDB when needed
  // Eg. company name, location, verified user, etc.
}
