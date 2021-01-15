import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { ArticleT } from "../store/actions/types";

export interface ArticleCardProps {
  article: ArticleT;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { title, _id, excerpt } = article;
  return (
    <Card>
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image="https://picsum.photos/200"
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {excerpt}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Button
          size="small"
          color="primary"
          component={RouterLink}
          to={`/article/${_id}`}
        >
          View article
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
