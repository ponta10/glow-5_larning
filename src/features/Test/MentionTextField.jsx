import React from 'react';
import { TextField, Box, List, ListItem, ListItemText } from '@mui/material';
import useMention from './UseMention';

const MentionTextField = () => {
  const { text, setText, suggestions, showSuggestions, setShowSuggestions,selectedIndex, inputRef, handleKeyDown } = useMention();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setText(text.replace(/@\w*/, `@${suggestion.display}`));
    setShowSuggestions(false);
  };

  return (
    <Box>
      <TextField
        label="Mention"
        value={text}
        onChange={handleTextChange}
        inputRef={inputRef}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && (
        <List>
          {suggestions.map((suggestion, index) => (
            <ListItem
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              selected={index === selectedIndex}
              sx={{
                backgroundColor: index === selectedIndex ? "primary.main" : "transparent",
                color: index === selectedIndex ? "white" : "inherit",
              }}
            >
              <ListItemText primary={suggestion.display} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default MentionTextField;
