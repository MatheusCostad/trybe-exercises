def calculate_node(picks, riddles):
    return max(picks.difference(riddles)) - min(picks.difference(riddles))


def blefe_winner(plays):
    players = list(plays.keys())
    first_player_picks = set(plays[players[0]])
    second_player_picks = set(plays[players[1]])
    first_player_node = calculate_node(first_player_picks, second_player_picks)

    second_player_node = calculate_node(
        second_player_picks, first_player_picks
    )

    if first_player_node > second_player_node:
        return players[0]
    elif first_player_node < second_player_node:
        return players[1]
    else:
        return None


winner = blefe_winner({"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]})

if winner:
    print(f"Quem ganhou: {winner} ")
else:
    print("Deu empate")
