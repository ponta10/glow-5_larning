import { useState, useEffect, useRef } from 'react';

const useMention = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // 追加: 選択中のインデックス
  const inputRef = useRef(); 

  const users = [
    { id: 1, display: 'おのかん' },
    { id: 2, display: 'れい' },
    { id: 3, display: 'ぽん' },
    { id: 4, display: 'こうへい' },
  ];

  useEffect(() => {
    if (text.includes('@')) {
      const mentionText = text.split('@')[1];
      if (mentionText) {
        const filteredUsers = users.filter(user => user.display.toLowerCase().startsWith(mentionText.toLowerCase()));
        setSuggestions(filteredUsers);
        setShowSuggestions(true);
      } else {
        setSuggestions(users); 
        setShowSuggestions(true);
      }
    } else {
      setShowSuggestions(false);
    }
  }, [text]);

  const handleKeyDown = e => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prevIndex => Math.max(0, prevIndex - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prevIndex => Math.min(suggestions.length - 1, prevIndex + 1));
    } else if (e.key === "Enter" && showSuggestions) {
      e.preventDefault();
      const selectedUser = suggestions[selectedIndex];
      const newText = `${text.split("@")[0]}@${selectedUser.display} `;
      setText(newText);
      setShowSuggestions(false);
    }
  };


  return { text, setText, suggestions, showSuggestions,inputRef, // 追加: 入力要素への参照を返す
  handleKeyDown,  };
};

export default useMention;