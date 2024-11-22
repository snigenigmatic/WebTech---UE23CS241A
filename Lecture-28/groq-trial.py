# 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

from groq import Groq

client = Groq(
    api_key=("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"),
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "Design an intricate scene that combines futuristic technology with ancient architecture. Picture a grand, ancient temple made of stone with massive pillars, partially overgrown with vines. The temple stands on a floating island in the sky, surrounded by a swirling, glowing mist. Within the temple, advanced holographic displays and floating robots assist a group of futuristic monks wearing robes embedded with neon lights. The monks are performing a mysterious ritual involving levitating geometric shapes that pulse with energy. In the background, other floating islands are connected by translucent bridges, and a sunset casts a warm, golden glow over the entire scene.",
        }
    ],
    model="llama3-8b-8192",
)

out = chat_completion.choices[0].message.content

with open("output.txt", "w") as f:
    f.write(out)
