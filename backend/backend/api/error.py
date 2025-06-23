

class HoroscopeError(Exception):
    """Custom exception for specific error handling."""
    def __init__(self, message):
        super().__init__(message)
        self.message = message

    def __str__(self):
        return f"HoroscopeError: {self.message}"

class NumerologyError(Exception):
    """Custom exception for specific error handling."""
    def __init__(self, message):
        super().__init__(message)
        self.message = message

    def __str__(self):
        return f"NumerologyError: {self.message}"
    
class TarotError(Exception):
    """Custom exception for specific error handling."""
    def __init__(self, message):
        super().__init__(message)
        self.message = message

    def __str__(self):
        return f"TarotError: {self.message}"
    
    
    
    