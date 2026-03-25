
class Parser {

    constructor(text) {
        this.text = text;
        this.index = 0;
    }

    remainingTokens() {
        return this.text && this.index < this.text.length;
    }

    getRepeat() {
        while (this.text.charAt(this.index++) !== '[' && this.remainingTokens()) {
            const start = this.index++;
            let bracketCount = 1;
            while (bracketCount > 0 && this.remainingTokens()) {
                const char = this.text.charAt(this.index++);
                if (char === '[') {
                    bracketCount++;
                } else if (char === ']') {
                    bracketCount--;
                }
            }
            const end = this.index;
            return this.text.substring(start, end);
        }
    }

    nextToken() {
        let token = '';
        let char = this.text.charAt(this.index);

        // If it's a space, ignore
        if (char === ' ') {
            this.index++;
            return this.nextToken();
        }

        // If it's a bracket, send that back
        if (char === '[' || char === ']') {
            this.index++;
            return char;
        }

        while (char !== ' ' && this.remainingTokens() && char !== ']') {
            token += char;
            char = this.text.charAt(++this.index);
        }
        return token;
    }

    parse() {
        const commands = [];
        const movementRegex = /^([fb]d|[lr]t)$/;
        const penRegex = /^p[ud]$/;
        const repeatRegex = /^repeat$/;
        
        while (this.remainingTokens()) {
            const token = this.nextToken();
            if (movementRegex.test(token)) {
                const cmd = new Command(token, this.nextToken());
                commands.push(cmd);
            } else if (penRegex.test(token)) {
                const cmd = new Command(token);
                commands.push(cmd);
            } else if (repeatRegex.test(token)) {
                const cmd = new Command(token, this.nextToken());
                const toRepeat = this.getRepeat();
                const parser = new Parser(toRepeat);
                cmd.commands = parser.parse();
                commands.push(cmd);
            }
        }

        return commands;
    }

}