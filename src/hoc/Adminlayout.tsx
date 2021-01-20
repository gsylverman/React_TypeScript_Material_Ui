import { Link as RouterLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

export interface AdminLayoutProps {
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  return (
    <div style={{ display: "flex", padding: "80px" }}>
      <nav>
        <List>
          <ListItem button component={RouterLink} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={RouterLink} to="/dashboard/profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={RouterLink} to="/dashboard/articles">
            <ListItemText primary="Articles" />
          </ListItem>
        </List>
      </nav>
      <main style={{ width: "100vh" }}>
        <div>
          <h2>{title}</h2>
        </div>
        <hr />
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
