import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";
export interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", padding: "80px" }}>
      <nav>
        <List>
          <ListItem button component={RouterLink} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={RouterLink} to="/profile">
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </nav>
      <main style={{ width: "100vh" }}>
        <div>
          <h2>Title</h2>
        </div>
        <hr />
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
