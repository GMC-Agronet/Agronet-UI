export default function OTPInput({ value, onChange }) {
    const handleChange = (index, digit) => {
      let newValue = value.split('');
      newValue[index] = digit;
      onChange(newValue.join(''));
    };
  
    return (
      <div className="flex space-x-2 mt-4">
        {[0, 1, 2, 3].map((i) => (
          <input 
            key={i}
            type="text"
            maxLength="1"
            value={value[i] || ''}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-12 h-12 text-center border rounded"
          />
        ))}
      </div>
    );
  }